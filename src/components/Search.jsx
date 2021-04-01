import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState();
  const [results, setResults] = useState();
  const searchAPI =
    "https://api.themoviedb.org/3/search/tv?api_key=f656551bdd5ebdb168235db96894f77a&language=en-US&page=1&query=";
  const posterPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getShowData = async () => {
      const response = await axios.get(searchAPI + term);
      setResults(response.data.results);
      console.log(response.data.results);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        getShowData();
      } else {
        setResults(null);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return (
    <div>
      <label>Search</label>
      <input onChange={(e) => setTerm(e.target.value)} value={term} />
      <div className="search-results-container">
        {results
          ? results.map((result) => (
              <div className="search-result">
                <img
                  key={result.id}
                  className="search-result-poster"
                  src={posterPath + result.poster_path}
                  alt="poster"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Search;
