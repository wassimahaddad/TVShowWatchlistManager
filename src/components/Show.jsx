import React from "react";
const posterPath = "https://image.tmdb.org/t/p/original";
const Show = ({ result }) => {
  return (
    <div className="search-result">
      <img
        key={result.id}
        className="search-result-poster"
        src={posterPath + result.poster_path}
        alt="poster"
      />
      <div>
        <div className="search-result-info">
          <div className="result-overview">
            <span>Overview: </span>
            {result.overview}
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
