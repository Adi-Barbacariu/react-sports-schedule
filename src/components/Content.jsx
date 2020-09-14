import React from "react";
import Day from "./Day";
import { champions, europa, nba, ufc251 } from "../matches";
import Match from "./Match";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentComp = this.props.currentCompetition;
    let comp = [];
    const dates = ["TODAY", "FRIDAY", "WEDNESDAY"];

    if (currentComp === "Champions League") {
      comp = champions;
    } else if (currentComp === "Europa League") {
      comp = europa;
    } else if (currentComp === "NBA") {
      comp = nba;
    } else if (currentComp === "251") {
      comp = ufc251;
    }

    return (
      <div className="main__schedule">
        {comp.map((current, index) => {
          return (
            <Day date={dates[index]}>
              {comp[index].map((current) => {
                return (
                  <Match
                    live={current.live}
                    time={current.time}
                    host={current.host}
                    guest={current.guest}
                    competition={current.competition}
                  />
                );
              })}
            </Day>
          );
        })}
      </div>
    );
  }
}
