import React from "react";
import "./Season.css";
import { Link } from "react-router-dom";
const Season = ({ name, id }) => {
  return (
    <Link to={`/Watchlist/${id}/${name.replace(" ", "")}`}>
      <div className="season-name">{name}</div>
    </Link>
  );
};

export default Season;
