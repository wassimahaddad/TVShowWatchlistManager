/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import MockAPI from "../../API/MockAPI";
import "./Home.css";
import EpisodeList from "../../components/EpisodeList/EpisodeList";

const Home = ({ handleNumber }) => {
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    const getWtachlistNumber = () => {
      MockAPI.get("/library/tvshows").then((response) => {
        setWatchlist(response.data);
        handleNumber(response.data.length);
        console.log(response.data);
      });
    };
    getWtachlistNumber();
  }, []);

  return (
    <div>
      <h1 className="airing-today-text">Airing today</h1>
      <div className="airing-today">
        <EpisodeList watchlist={watchlist} />
      </div>
      <h1 className="airing-next-text">Airing in the next days</h1>
      <div className="airing-next">No new episodes at the moment</div>
    </div>
  );
};

export default Home;
