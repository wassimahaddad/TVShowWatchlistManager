import React from "react";
import Poster from "../Poster/Poster";
import "./WatchlistItem.css";

const WatchlistItem = ({ result }) => {
  return (
    <div className="watchlist-item">
      <Poster className="watchlist-item-poster" result={result} />
      <button className="watchlist-item-button">Remove from Watchlist</button>
    </div>
  );
};

export default WatchlistItem;
