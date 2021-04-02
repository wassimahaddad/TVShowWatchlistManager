import React from "react";
import defaultPoster from "../../Assets/img/default-poster.jpg";
import API from "../../API/addresses";
import "./Poster.css";
const Poster = ({ result }) => {
  return (
    <div className="search-result-poster">
      <img
        src={
          result.poster_path
            ? API.posterPath + result.poster_path
            : defaultPoster
        }
        alt="poster"
      />
    </div>
  );
};

export default Poster;
