import React from "react";
import "./Season.css";
import { Link } from "react-router-dom";
const Season = ({ name, id, currentShow }) => {
  return (
    <Link to={`/Watchlist/${id}/${name.replace(" ", "")}`}>
      <div className="season-name">{`${currentShow.original_name} | ${name}`}</div>
    </Link>
  );
};

export default Season;

//
