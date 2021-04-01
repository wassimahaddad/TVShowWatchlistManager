import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  return (
    <div>
      <label>Search</label>
      <input onChange={(e) => setTerm(e.target.value)} value={term} />
    </div>
  );
};

export default Search;
