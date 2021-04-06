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
  console.log(showId, seasonId);
  console.log(currentShow);
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

  return (
    <div>
      <h1 className="season-episodes-text">Episodes</h1>
      <div className="season-episodes">
        {data.episodes
          ? data.episodes.map((item) => (
              <div
                key={item.episode_number}
              >{`${currentShow.original_name}, Episode ${item.episode_number}, ${item.name}`}</div>
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
