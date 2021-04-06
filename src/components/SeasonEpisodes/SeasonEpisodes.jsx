/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import tmdb from "../../API/TMDB";
import axios from "axios";
import "./SeasonEpisode.css";

const SeasonEpisodes = ({ currentShow }) => {
  const { goBack, location } = useHistory();
  const [data, setData] = useState({});
  const showId = location.pathname.split("/")[2];
  const seasonId = location.pathname.split("/")[3].replace("Season", "");
  // --------------------
  useEffect(() => {
    const getEpisodes = async () => {
      const response = await axios.get(
        `${tmdb.baseUrl}${showId}/season/${seasonId}${tmdb.apiKey}`
      );
      setData(response.data);
      console.log(response.data);
    };
    getEpisodes();
  }, []);
  // --------------------
  const pad = (n) => (n < 10 ? "0" + n : n);
  // --------------------
  return (
    <div>
      <h1 className="season-episodes-text">
        Episodes<span>Watched</span>
      </h1>
      <div className="season-episodes">
        {data.episodes
          ? data.episodes.map((item) => (
              <React.Fragment key={item.episode_number}>
                <div className="season-episodes-line">{`${
                  currentShow.original_name
                }  |  Episode ${pad(item.episode_number)}  |  ${
                  item.air_date
                }  |  ${item.name}`}</div>
                <div className="season-episodes-checkbox">
                  <input type="checkbox" />
                </div>
              </React.Fragment>
            ))
          : null}
      </div>
      <div className="season-episodes-button" onClick={() => goBack()}>
        <span>&laquo;</span> Back to seasons
      </div>
    </div>
  );
};

export default SeasonEpisodes;
