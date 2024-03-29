import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "./Card";

const Main = ({ searchResults }) => {
  const [rockSection, setRockSection] = useState([]);
  const [popSection, setPopSection] = useState([]);
  const [hipHopSection, setHipHopSection] = useState([]);

  const handleSection = async (artistName, setSection) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        const { data } = await response.json();
        console.log("Dati ottenuti dall'API:", data);
        setSection(data.slice(0, 9));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    handleSection("queen", setRockSection);
    handleSection("katyperry", setPopSection);
    handleSection("eminem", setHipHopSection);
  }, []);

  return (
    <>
      {!searchResults || searchResults.length === 0 ? (
        <>
          <div className="text-white">
            <h2 className="text-white">Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {rockSection.map((songInfo) => (
                <Card key={songInfo.id} songInfo={songInfo} />
              ))}
            </div>
          </div>
          <div className="text-white">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {popSection.map((songInfo) => (
                <Card key={songInfo.id} songInfo={songInfo} />
              ))}
            </div>
          </div>
          <div className="text-white">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {hipHopSection.map((songInfo) => (
                <Card key={songInfo.id} songInfo={songInfo} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-white">
          <h2>Search Results</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {searchResults.map((songInfo) => (
              <Card key={songInfo.id} songInfo={songInfo} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Main;
