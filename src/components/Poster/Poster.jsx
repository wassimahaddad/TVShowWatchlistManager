import React from "react";
import defaultPoster from "../../Assets/img/default-poster.jpg";
import tmdb from "../../API/TMDB";
import "./Poster.css";
const Poster = ({ result }) => {
  return (
    <div className="search-result-poster">
      <img
        src={
          result.poster_path
            ? tmdb.posterPath + result.poster_path
            : defaultPoster
        }
        alt="poster"
      />
    </div>
  );
};

export default Poster;
