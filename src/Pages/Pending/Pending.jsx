import React, { useState, useEffect } from "react";
import MockAPI from "../../API/MockAPI";
import "./Pending.css";
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
      <h1 className="pending-episodes-text">
        Pending episodes<span>Watched</span>
      </h1>
      <div className="pending-episodes">
        <EpisodeList watchlist={watchlist} time="previous" />
      </div>
    </div>
  );
};

export default Pending;
