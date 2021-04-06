import React from "react";
import { useHistory } from "react-router-dom";
import "./SeasonEpisode.css";

const SeasonEpisodes = () => {
  const { goBack } = useHistory();
  return (
    <div>
      <h1 className="season-episodes-text">Episodes</h1>
      <div className="season-episodes">episode list goes here</div>
      <div className="season-episodes-button" onClick={() => goBack()}>
        <span>&laquo;</span> Back to watchlist
      </div>
    </div>
  );
};

export default SeasonEpisodes;
