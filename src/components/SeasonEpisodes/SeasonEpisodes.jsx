/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import tmdb from "../../API/TMDB";
import axios from "axios";
import MockAPI from "../../API/MockAPI";
import "./SeasonEpisode.css";

const SeasonEpisodes = ({ currentShow, index }) => {
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
    };
    getEpisodes();
  }, [currentShow]);
  // --------------------
  const pad = (n) => (n < 10 ? "0" + n : n);
  const checkedState = (e) => {
    const obj = { ...currentShow };
    obj.seasons[index].episodes = [...data.episodes];
    e.target.checked
      ? (obj.seasons[index].episodes[e.target.dataset.index].watched = true)
      : (obj.seasons[index].episodes[e.target.dataset.index].watched = false);

    MockAPI.put(`/library/tvshows/${obj.idmock}`, obj);
  };
  // --------------------
  return (
    <div>
      <h1 className="season-episodes-text">
        Episodes<span>Watched</span>
      </h1>
      <div className="season-episodes">
        {data.episodes
          ? data.episodes.map((item, i) => (
              <React.Fragment key={item.episode_number}>
                <div className="season-episodes-line">{`${
                  currentShow.original_name
                }  |  Episode ${pad(item.episode_number)}  |  ${
                  item.air_date
                }  |  ${item.name}`}</div>
                <div className="season-episodes-checkbox">
                  <input
                    onChange={checkedState}
                    data-number={item.episode_number}
                    data-index={i}
                    type="checkbox"
                    defaultChecked={
                      currentShow.seasons[index].episodes
                        ? currentShow.seasons[index].episodes[i].watched
                        : false
                    }
                  />
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
