import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Show from "../../components/Show/Show";
import tmdb from "../../API/TMDB";
import "./Search.css";
//-----------------------------------------------------------------
const Search = ({ number, handleNumber }) => {
  const searchBar = useRef();
  const [term, setTerm] = useState("");
  const [results, setResults] = useState();
  //-----------------------------------------------------------------
  useEffect(() => {
    searchBar.current.focus();
    const getShowData = async () => {
      const response = await axios.get(tmdb.search + term);
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
  //-----------------------------------------------------------------
  return (
    <div>
      <div className="search-bar">
        <input
          ref={searchBar}
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          placeholder="Type a TV show name to search"
        />
      </div>

      <div className="search-results-container">
        {results
          ? results.map((result) => (
              <React.Fragment key={result.id}>
                <Show
                  result={result}
                  number={number}
                  handleNumber={handleNumber}
                />
              </React.Fragment>
            ))
          : null}
      </div>
    </div>
  );
};

export default Search;
