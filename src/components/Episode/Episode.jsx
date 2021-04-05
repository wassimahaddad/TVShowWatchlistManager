import React from "react";

const Episode = ({ item }) => {
  console.log(item.next_episode_to_air);

  const pad = (n) => (n < 10 ? "0" + n : n);
  return (
    <div>
      <>{item.name},</>
      <>S{pad(item.next_episode_to_air.season_number)}</>
      <>E{pad(item.next_episode_to_air.episode_number)},</>
      <>{item.next_episode_to_air.air_date},</>
    </div>
  );
};
export default Episode;
