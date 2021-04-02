import React, { useState } from "react";
import "./Show.css";
import Trailer from "../Trailer/Trailer";
import Poster from "../Poster/Poster";
import BasicInfo from "../BasicInfo/BasicInfo";
import API from "../../API/addresses";
import axios from "axios";

const Show = ({ result }) => {
  const [trailerSuffix, setTrailerSuffix] = useState();
  const [noTrailer, setNoTrailer] = useState();

  const getTrailer = async () => {
    const response = await axios.get(
      `${API.baseUrl}${result.id}?api_key=${API.apiKey}${API.appendVideo}`
    );
    if (response.data.videos.results[0]) {
      setTrailerSuffix(response.data.videos.results[0].key);
    } else {
      setNoTrailer("Trailer not available for this show");
    }
  };

  return (
    <div className="search-result">
      <Poster result={result} />
      <div className="result-trailer">
        {trailerSuffix ? <Trailer suffix={trailerSuffix} /> : null}
        {noTrailer ? <>{noTrailer}</> : null}
      </div>
      <div>
        <BasicInfo result={result} />
        <div className="show-result-buttons">
          <button className="add-to-watchlist">Add to Watch List</button>
          <button onClick={getTrailer} className="watch-trailer">
            Watch Trailer
          </button>
          <button className="simillar-shows">Show Similar</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
