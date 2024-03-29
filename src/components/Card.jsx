import React from "react";
import "../App.css";

const Card = ({ songInfo }) => {
  const { title, artist, album } = songInfo;

  return (
    <div className="col-6 col-md-3 text-center mb-3">
      <img className="img-fluid" src={album.cover_medium} alt="track" />
      <p className="mt-2">
        <strong>Track:</strong> {title}
        <br />
        <strong>Artist:</strong> {artist.name}
        <br />
        <strong>Album:</strong> {album.title}
      </p>
    </div>
  );
};

export default Card;
