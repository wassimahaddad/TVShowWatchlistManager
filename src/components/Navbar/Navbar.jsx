import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ number }) => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Watchlist">
        Watchlist(<span className="watchlist-number">{number}</span>)
      </Link>
      <Link to="/Search">Search</Link>
      <Link to="/Pending">Pending</Link>
    </div>
  );
};

export default Navbar;
