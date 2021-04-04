import React from "react";
import "./Trailer.css";

const Trailer = ({ suffix }) => {
  return (
    <iframe
      className="result-youtube"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${suffix}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen="1"
    ></iframe>
  );
};

export default Trailer;
