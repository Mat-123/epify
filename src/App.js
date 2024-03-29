// App.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const { data } = await response.json();
        setSearchResults(data.slice(0, 10));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col-2">
            <Sidebar onSearch={handleSearch}></Sidebar>
          </Col>
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Main searchResults={searchResults} />
          </Col>
        </Row>
      </Container>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Player></Player>
      </Container>
    </>
  );
};

export default App;
