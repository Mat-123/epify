import { useState, useEffect } from "react";
import Card from "./Card";

const SearchResults = ({ searchResults }) => {
  const [searchResultsState, setSearchResultsState] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchResults}`);
        if (response.ok) {
          const { data } = await response.json();
          setSearchResultsState(data.slice(0, 10));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (searchResults) {
      fetchSearchResults();
    }
  }, [searchResults]);

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {searchResultsState.map((songInfo) => (
          <Card key={songInfo.id} songInfo={songInfo} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
