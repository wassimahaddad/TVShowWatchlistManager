/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Episode.css";

const Episode = ({ item, cbclass, previous }) => {
  const pad = (n) => (n < 10 ? "0" + n : n);

  return (
    <>
      <div className="episode-details">
        <div className="episode-airdate">
          {previous ? item.last_air_date : item.next_episode_to_air.air_date}
        </div>
        <div className="episode-name">{item.name},</div>
        <div className="episode-se">{`S${pad(
          previous
            ? item.last_episode_to_air.season_number
            : item.next_episode_to_air.season_number
        )}E${pad(
          previous
            ? item.last_episode_to_air.episode_number
            : item.next_episode_to_air.episode_number
        )}`}</div>
      </div>

      {/* <input
        onChange={checkedState}
        ref={cbRef}
        className={cbclass}
        type="checkbox"

        // defaultChecked={
        //   item.seasons[index].episodes
        //     ? item.seasons[index].episodes[index].watched
        //     : false
        // }
      /> */}
    </>
  );
};
export default Episode;
