import React from "react";

import "../App.css";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Player = () => {
  const selectedSong = useSelector((state) => {
    return state.data;
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio-element");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <Row className="h-100 justify-content-end align-items-center">
      <Col lg={{ span: 3 }} className="text-center">
        {selectedSong && (
          <>
            <img src={selectedSong.album.cover_small} alt="Song Cover" />
            <span className="text-white ms-3">{selectedSong.title}</span>
          </>
        )}
      </Col>
      <Col lg={{ span: 6 }}>
        <Row className="h-100 flex-column justify-content-center align-items-center">
          <Col xs={6} md={6} className="playerControls">
            <div className="d-flex align-items-center">
              <a href="#">
                <img src={shuffle} alt="shuffle" />
              </a>
              <a href="#">
                <img src={prev} alt="prev" />
              </a>
              <a href="#" onClick={togglePlay}>
                {isPlaying ? (
                  <img src="pause.svg" alt="pause" id="playBtn" />
                ) : (
                  <img src={play} alt="play" id="pauseBtn" />
                )}
              </a>
              <a href="#">
                <img src={next} alt="next" />
              </a>
              <a href="#">
                <img src={repeat} alt="repeat" />
              </a>
            </div>
            <div className="progress mt-3" id="progress">
              <div role="progressbar"></div>
            </div>
          </Col>
          <Col className="playerControls">
            <audio
              id="audio-element"
              src={selectedSong && `${selectedSong.preview}`}
              type="audio/mpeg"
              onPlay={handlePlay}
              onPause={handlePause}
            ></audio>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Player;
