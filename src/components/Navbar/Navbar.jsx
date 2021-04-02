import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Watchlist">Watchlist</Link>
      <Link to="/Search">Search</Link>
      <Link to="/Pending">Pending</Link>
    </div>
  );
};

export default Navbar;
