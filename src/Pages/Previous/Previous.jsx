import React, { useState, useEffect } from "react";
import MockAPI from "../../API/MockAPI";
import "./Previous.css";
import EpisodeList from "../../components/EpisodeList/EpisodeList";

const Pending = () => {
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    const getWtachlistNumber = () => {
      MockAPI.get("/library/tvshows").then((response) => {
        setWatchlist(response.data);
        // console.log(response.data);
      });
    };
    getWtachlistNumber();
  }, []);
  return (
    <div>
      <h1 className="previous-episodes-text">
        Previous episodes<span>Watched</span>
      </h1>
      <div className="previous-episodes">
        <EpisodeList watchlist={watchlist} time="previous" />
      </div>
    </div>
  );
};

export default Pending;
