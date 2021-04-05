import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Pending from "./Pages/Pending/Pending";
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
        <Route path="/Search">
          <Search number={number} handleNumber={handleNumber} />
        </Route>
        <Route path="/Pending" exact>
          <Pending />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
