import React, { useEffect, useState } from "react";
import MockAPI from "../../API/MockAPI";
import "./Watchlist.css";
import WatchlistItem from "../WatchlistItem/WatchlistItem";

const Watchlist = ({ handleNumber }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getWtachlist = async () => {
      const response = await MockAPI.get("/library/tvshows");
      setData(response.data);
      console.log("response=", response.data);
      console.log(response.data.length);
      handleNumber(response.data.length);
    };
    getWtachlist();
  }, [handleNumber]);
  console.log("data=", data);
  return (
    <div className="watchlist-items">
      {data
        ? data.map((result) => (
            <div key={result.id}>
              <WatchlistItem result={result} />
            </div>
          ))
        : null}
    </div>
  );
};

export default Watchlist;
