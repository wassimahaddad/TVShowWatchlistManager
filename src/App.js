import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Pending from "./components/Pending/Pending";
import Watchlist from "./components/Watchlist/Watchlist";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/Watchlist" exact component={Watchlist} />
        <Route path="/Search" exact component={Search} />
        <Route path="/Pending" exact component={Pending} />
      </BrowserRouter>
    </div>
  );
};

export default App;
