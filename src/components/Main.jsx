import React, { useEffect } from "react";
import "../App.css";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequestAction, fetchDataSuccessAction, fetchDataFailureAction } from "../redux/actions/actions";

const Main = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);
  console.log(loading, data, error);

  useEffect(() => {
    const fetchData = async (artistName, querySelector) => {
      try {
        dispatch(fetchDataRequestAction());
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
          dispatch(fetchDataSuccessAction(data));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        dispatch(fetchDataFailureAction(err.message));
      }
    };

    fetchData("queen", "#rockSection");
    fetchData("katyperry", "#popSection");
    fetchData("eminem", "#hipHopSection");
  }, [dispatch]);

  console.log("Redux state:", { loading, data, error });

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && data.map((songInfo, index) => <Card key={index} songInfo={songInfo} />)}
    </div>
  );
};

export default Main;
