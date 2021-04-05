import React from "react";
import Episode from "../Episode/Episode";

const EpisodeList = ({ watchlist }) => {
  return (
    <div>
      <React.Fragment>
        {watchlist.map((item) => (
          <React.Fragment key={item.idmock}>
            <Episode item={item} />
          </React.Fragment>
        ))}
      </React.Fragment>
    </div>
  );
};
export default EpisodeList;
