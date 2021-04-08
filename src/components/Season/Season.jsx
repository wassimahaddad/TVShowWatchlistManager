import React from "react";
import "./Season.css";
import { Link } from "react-router-dom";
const Season = ({ name, id, currentShow, index, handleIndex }) => {
  return (
    <Link to={`/Watchlist/${id}/${name.replace(" ", "")}`}>
      <div onClick={() => handleIndex(index)} className="season-name">
        {`${currentShow.original_name} | ${name}`}
      </div>
    </Link>
  );
};

export default Season;
