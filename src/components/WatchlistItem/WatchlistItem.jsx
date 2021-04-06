import React from "react";
import { Link } from "react-router-dom";
import Poster from "../Poster/Poster";
import MockAPI from "../../API/MockAPI";
import "./WatchlistItem.css";

const WatchlistItem = ({ result, number, handleNumber, handleCurrentShow }) => {
  const removeItem = async () => {
    await MockAPI.delete(`/library/tvshows/${result.idmock}`);
    handleNumber((number = number - 1));
  };
  return (
    <div className="watchlist-item">
      <Link className="watchlist-goto" to={`/Watchlist/${result.id}`}>
        <Poster
          handleCurrentShow={handleCurrentShow}
          className="watchlist-item-poster"
          result={result}
        />
      </Link>
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
