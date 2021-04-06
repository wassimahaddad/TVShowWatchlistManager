import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  const [currentShow, setCurrentShow] = useState({});
  const handleNumber = (num) => {
    setNumber(num);
  };
  const handleCurrentShow = (show) => {
    setCurrentShow(show);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar number={number} />
        <Switch>
          <Route path="/" exact>
            <Home handleNumber={handleNumber} />
          </Route>
          <Route path="/Watchlist" exact>
            <Watchlist
              number={number}
              handleNumber={handleNumber}
              handleCurrentShow={handleCurrentShow}
            />
          </Route>
          <Route path="/Watchlist/:id" exact>
            <Seasons
              number={number}
              handleNumber={handleNumber}
              currentShow={currentShow}
            />
          </Route>
          <Route path="/Watchlist/:id/:season" exact>
            <SeasonEpisodes currentShow={currentShow} />
          </Route>
          <Route path="/Search">
            <Search number={number} handleNumber={handleNumber} />
          </Route>
          <Route path="/Previous" exact>
            <Previous />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
