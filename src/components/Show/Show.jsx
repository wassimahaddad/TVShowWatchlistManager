import React, { useState } from "react";
import "./Show.css";
import Trailer from "../Trailer/Trailer";
import Poster from "../Poster/Poster";
import BasicInfo from "../BasicInfo/BasicInfo";
import tmdb from "../../API/TMDB";
import MockAPI from "../../API/MockAPI";
import axios from "axios";

const Show = ({ result, number, handleNumber }) => {
  const [trailerSuffix, setTrailerSuffix] = useState();
  const [noTrailer, setNoTrailer] = useState();
  const [data, setData] = useState({});
  const [clickedButton, setClickedButton] = useState("");
  // --------------------------------------------------------------------
  const getShowDetails = async (e) => {
    const response = await axios.get(
      `${tmdb.baseUrl}${result.id}${tmdb.apiKey}${tmdb.appendVideo}`
    );
    console.log(response.data);
    setData(response.data);
    return response.data;
  };
  // --------------------------------------------------------------------
  const getTrailerDetails = async (e) => {
    if (data === {} || result.id !== data.id) {
      const response = await getShowDetails();
      console.log(response);
      // ------------
      response.videos.results[0]
        ? setTrailerSuffix(response.videos.results[0].key)
        : setNoTrailer(tmdb.defaultTrailer);
      // ------------
      setClickedButton(e.target.name);
      console.log(e.target.name);
    } else {
      // ------------
      data.videos.results[0]
        ? setTrailerSuffix(data.videos.results[0].key)
        : setNoTrailer(tmdb.defaultTrailer);
      // ------------
      setClickedButton(e.target.name);
    }
  };
  // --------------------------------------------------------------------
  const AddToWatchlist = async () => {
    if (data === {} || result.id !== data.id) {
      const response = await getShowDetails();
      console.log(response);
      MockAPI.post("/library/tvshows", { ...response });
    } else {
      console.log(data.name);
      MockAPI.post("/library/tvshows", { ...data });
    }
    handleNumber();
  };
  // --------------------------------------------------------------------
  return (
    <div className="search-result">
      <Poster result={result} />

      <div className="result-trailer">
        {trailerSuffix && clickedButton === "trailer" ? (
          <Trailer suffix={trailerSuffix} />
        ) : null}
        {noTrailer ? <>{noTrailer}</> : null}
      </div>

      <div>
        <BasicInfo result={result} />

        <div className="show-result-buttons">
          <button
            className="add-to-watchlist"
            onClick={AddToWatchlist}
            name="watchlist"
          >
            Add to Watch List
          </button>
          <button
            onClick={getTrailerDetails}
            className="watch-trailer"
            name="trailer"
          >
            Watch Trailer
          </button>
          <button className="simillar-shows">More Information</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
