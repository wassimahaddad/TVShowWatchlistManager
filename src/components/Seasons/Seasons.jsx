/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import tmdb from "../../API/TMDB";
import axios from "axios";
import "./Seasons.css";

import Season from "../Season/Season";

const Seasons = ({ currentShow }) => {
  const { goBack, location } = useHistory();
  const [data, setData] = useState("");
  //   const [currentSeason, setCurrentSeason] = useState([]);
  // --------------------
  const showId = location.pathname.replace("/Watchlist/", "");
  useEffect(() => {
    const getSeasons = async () => {
      const response = await axios.get(tmdb.baseUrl + showId + tmdb.apiKey);
      setData(response.data);
      console.log(currentShow);
    };
    getSeasons();
  }, []);

  return (
    <div>
      <h1 className="seasons-text">Seasons</h1>
      <div className="seasons">
        {data.seasons
          ? data.seasons.map((item, i) => (
              <React.Fragment key={`${showId}${i}`}>
                <Season
                  id={showId}
                  name={item.name}
                  currentShow={currentShow}
                />
              </React.Fragment>
            ))
          : null}
      </div>
      <div className="seasons-button" onClick={() => goBack()}>
        <span>&laquo;</span> Back to watchlist
      </div>
    </div>
  );
};

export default Seasons;
