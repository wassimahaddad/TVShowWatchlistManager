import React from "react";
import API from "../../API/addresses";

import defaultPoster from "../../Assets/img/default-poster.jpg";
import "./Show.css";

const Show = ({ result }) => {
  return (
    <div className="search-result">
      <img
        className="search-result-poster"
        src={
          result.poster_path
            ? API.posterPath + result.poster_path
            : defaultPoster
        }
        alt="poster"
      />

      <div>
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

        <div className="show-result-buttons">
          <button className="add-to-watchlist">Add to Watch List</button>
          <button className="watch-trailer">Watch Trailer</button>
          <button className="simillar-shows">Show Similar</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
