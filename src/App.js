// App.js
import React from "react";
import { Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/reducers";

const store = createStore(rootReducer); // Crea lo store Redux utilizzando il reducer radice

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid>
        <Row>
          <Sidebar />
          <Main />
        </Row>
        <Player />
      </Container>
    </Provider>
  );
};

export default App;
