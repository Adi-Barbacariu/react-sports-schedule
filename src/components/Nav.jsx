import React from "react";
import SportBtn from "./SportBtn";
import CompetitionBtn from "./CompetitionBtn";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main__nav">
        <SportBtn name="FOOTBALL">
          <CompetitionBtn name="Champions League" />
          <CompetitionBtn name="Europa League" />
        </SportBtn>
        <SportBtn name="BASKETBALL">
          <CompetitionBtn name="NBA" />
        </SportBtn>
        <SportBtn name="UFC">
          <CompetitionBtn name="251" />
        </SportBtn>
      </div>
    );
  }
}
