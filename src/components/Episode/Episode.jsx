import React from "react";
import "./Episode.css";

const Episode = ({ item, cbclass }) => {
  //   console.log(item.next_episode_to_air);
  const pad = (n) => (n < 10 ? "0" + n : n);
  return (
    <>
      <div className="episode-details">
        <div className="episode-airdate">
          {item.next_episode_to_air.air_date}
        </div>
        <div className="episode-name">{item.name},</div>
        <div className="episode-se">{`S${pad(
          item.next_episode_to_air.season_number
        )}E${pad(item.next_episode_to_air.episode_number)}`}</div>
      </div>

      <input className={cbclass} type="checkbox" />
    </>
  );
};
export default Episode;
