import React from "react";
import Episode from "../Episode/Episode";

const EpisodeList = ({ watchlist, time }) => {
  //   ------
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  //   ------

  const Days = (date) => {
    const a = new Date(date);
    return a / 86400000;
  };

  switch (time) {
    case "today":
      return (
        <div>
          <React.Fragment>
            {watchlist
              .filter(
                (item) =>
                  item.in_production &&
                  item.next_episode_to_air &&
                  item.next_episode_to_air.air_date === today
              )
              .map((item, index) => (
                <div key={item.id} cbclass="episode-checkbox">
                  <Episode item={item} index={index} epis={item} />
                </div>
              ))}
          </React.Fragment>
        </div>
      );
    case "previous":
      return (
        <div>
          <React.Fragment>
            {watchlist
              .filter(
                (item) =>
                  item.in_production &&
                  item.next_episode_to_air &&
                  item.next_episode_to_air.air_date < today
              )
              .map((item) => (
                <div key={item.idmock} cbclass="episode-checkbox">
                  <Episode item={item} />
                </div>
              ))}
          </React.Fragment>
        </div>
      );

    case "tomorrow":
      return (
        <div>
          <React.Fragment>
            {watchlist
              .filter(
                (item) =>
                  item.in_production &&
                  item.next_episode_to_air &&
                  Days(item.next_episode_to_air.air_date) - Days(today) === 1
              )
              .map((item) => (
                <div key={item.idmock}>
                  <Episode item={item} cbclass="hidden" />
                </div>
              ))}
          </React.Fragment>
        </div>
      );
    case "nextdays":
      return (
        <div>
          <React.Fragment>
            {watchlist
              .filter(
                (item) =>
                  item.in_production &&
                  item.next_episode_to_air &&
                  Days(item.next_episode_to_air.air_date) - Days(today) > 1
              )

              .map((item) => (
                <div key={item.idmock}>
                  <Episode item={item} cbclass="hidden" />
                </div>
              ))}
          </React.Fragment>
        </div>
      );

    default:
      return <div>Nothing to watch</div>;
  }
};
export default EpisodeList;
