import React from "react";
import { useHistory } from "react-router-dom";
import "./Seasons.css";
const Seasons = () => {
  const { goBack } = useHistory();
  return (
    <div>
      <h1 className="seasons-text">Seasons</h1>
      <div className="seasons">Season list goes here</div>
      <div className="seasons-button">
        <button onClick={() => goBack()}>Go Back</button>
      </div>
    </div>
  );
};

export default Seasons;
