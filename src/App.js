import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Seasons from "./components/Seasons/Seasons";
import SeasonEpisodes from "./components/SeasonEpisodes/SeasonEpisodes";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Previous from "./Pages/Previous/Previous";
import Watchlist from "./Pages/Watchlist/Watchlist";

import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);
  const handleNumber = (num) => {
    setNumber(num);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar number={number} />
        <Route path="/" exact>
          <Home handleNumber={handleNumber} />
        </Route>
        <Route path="/Watchlist" exact>
          <Watchlist number={number} handleNumber={handleNumber} />
        </Route>
        <Route path="/Watchlist/:id" exact>
          <Seasons number={number} handleNumber={handleNumber} />
        </Route>
        <Route path="/Watchlist/:id/">
          <SeasonEpisodes />
        </Route>
        <Route path="/Search">
          <Search number={number} handleNumber={handleNumber} />
        </Route>
        <Route path="/Previous" exact>
          <Previous />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
