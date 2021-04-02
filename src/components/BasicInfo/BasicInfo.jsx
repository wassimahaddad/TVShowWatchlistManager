import React from "react";
import "./BasicInfo.css";
import API from "../../API/addresses";

const BasicInfo = ({ result }) => {
  return (
    <div className="search-result-info">
      <div className="result-title">
        <span>Title: </span>
        {result.name}
      </div>
      <div className="result-overview">
        <span>Overview: </span>
        {result.overview !== "" ? result.overview : API.defaultOverview}
      </div>
      <div className="result-first-aired">
        <span>First aired: </span>
        {result.first_air_date}
      </div>
      <div className="result-average-vote">
        <span>Average vote: </span>
        {result.vote_average}
      </div>
    </div>
  );
};

export default BasicInfo;
