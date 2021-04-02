import React, { useEffect, useState } from "react";
import axios from "axios";
import Show from "./Show";

const Search = () => {
  const [term, setTerm] = useState();
  const [results, setResults] = useState();
  const searchAPI =
    "https://api.themoviedb.org/3/search/tv?api_key=f656551bdd5ebdb168235db96894f77a&language=en-US&page=1&query=";

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
        {results ? results.map((result) => <Show result={result} />) : null}
      </div>
    </div>
  );
};

export default Search;
