import React, { useEffect, useState } from "react";
import MockAPI from "../../API/MockAPI";
import "./Watchlist.css";
import WatchlistItem from "../WatchlistItem/WatchlistItem";

const Watchlist = ({ number }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getWtachlist = async () => {
      const response = await MockAPI.get("/library/tvshows");
      setData(response.data);
      console.log("response=", response.data);
    };
    getWtachlist();
  }, [number]);
  console.log("data=", data);
  return (
    <div>
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
