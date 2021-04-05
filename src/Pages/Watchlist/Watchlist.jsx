import React, { useEffect, useState } from "react";
import MockAPI from "../../API/MockAPI";
import "./Watchlist.css";
import WatchlistItem from "../../components/WatchlistItem/WatchlistItem";

const Watchlist = ({ number, handleNumber }) => {
  const [data, setData] = useState();
  // --------------------
  useEffect(() => {
    const getWtachlist = async () => {
      const response = await MockAPI.get("/library/tvshows");
      setData(response.data);
      handleNumber(response.data.length);
    };
    getWtachlist();
  }, [handleNumber]);
  // --------------------

  return (
    <div className="watchlist-items">
      {data
        ? data.map((result) => (
            <div key={result.idmock}>
              <WatchlistItem
                number={number}
                handleNumber={handleNumber}
                result={result}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Watchlist;
