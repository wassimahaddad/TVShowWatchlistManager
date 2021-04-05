import React from "react";
import Poster from "../Poster/Poster";
import MockAPI from "../../API/MockAPI";
import "./WatchlistItem.css";

const WatchlistItem = ({ result, number, handleNumber }) => {
  const removeItem = async () => {
    await MockAPI.delete(`/library/tvshows/${result.idmock}`);
    handleNumber((number = number - 1));
  };
  return (
    <div className="watchlist-item">
      <Poster className="watchlist-item-poster" result={result} />
      <button
        id={result.idmock}
        onClick={removeItem}
        className="watchlist-item-button"
      >
        Remove from Watchlist
      </button>
    </div>
  );
};

export default WatchlistItem;
