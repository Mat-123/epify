import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {Array.isArray(results) ? (
        results.map((result) => (
          <div key={result.id} className="search-result">
            <p>Title: {result.title}</p>
            <p>Artist: {result.artist}</p>
          </div>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchResults;
