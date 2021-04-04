import React from "react";
import Poster from "../Poster/Poster";

const WatchlistItem = ({ result }) => {
  return (
    <div>
      <Poster result={result} />
      <button>Remove from Watchlist</button>
    </div>
  );
};

export default WatchlistItem;
