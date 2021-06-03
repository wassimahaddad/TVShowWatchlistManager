/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import MockAPI from "../../API/MockAPI";
import "./Home.css";
import EpisodeList from "../../components/EpisodeList/EpisodeList";
import axios from "axios";
import tmdb from "../../API/TMDB";

const Home = ({ handleNumber }) => {
  const [watchlist, setWatchlist] = useState([]);

  // --------------------
  useEffect(() => {
    const getWtachlistNumber = async () => {
      const response = await MockAPI.get("/library/tvshows");
      handleNumber(response.data.length);
      console.log(response.data);
      let temp = [];
      response.data.forEach(async (show) => {
        // await MockAPI.delete(`/library/tvshows/${show.idmock}`);
        const res = await axios.get(
          `${tmdb.baseUrl}${show.id}${tmdb.apiKey}${tmdb.appendVideo}`
        );
        temp.push(res.data);
        await MockAPI.put(`/library/tvshows/${show.idmock}`, { ...res.data });
      });

      const response2 = await MockAPI.get("/library/tvshows");
      setWatchlist(response2.data);
    };
    getWtachlistNumber();
  }, []);
  // --------------------
  return (
    <div>
      <h1 className="aired-yesterday-text">Aired yesterday</h1>
      <div className="airing-today">
        <EpisodeList watchlist={watchlist} time="yesterday" />
      </div>
      <h1 className="airing-today-text">Airing today</h1>
      <div className="airing-today">
        <EpisodeList watchlist={watchlist} time="today" />
      </div>
      {/* <h1 className="airing-tomorrow-text">Airing tomorrow</h1>
      <div className="airing-tomorrow">
        <EpisodeList watchlist={watchlist} time="tomorrow" />
      </div> */}
      <h1 className="airing-next-text">Airing next</h1>
      <div className="airing-next">
        <EpisodeList watchlist={watchlist} time="nextdays" />
      </div>
    </div>
  );
};

export default Home;
