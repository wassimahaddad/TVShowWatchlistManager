import React from "react";
import MockAPI from "../../API/MockAPI";
import "./Home.css";

const Home = ({ handleNumber }) => {
  const getWtachlistNumber = async () => {
    const response = await MockAPI.get("/library/tvshows");
    handleNumber(response.data.length);
  };
  getWtachlistNumber();
  return (
    <div>
      <h1 className="airing-today-text">Airing today</h1>
      <div className="airing-today">No new episodes at the moment</div>
      <h1 className="airing-next-text">Airing in the next days</h1>
      <div className="airing-next">No new episodes at the moment</div>
    </div>
  );
};

export default Home;
