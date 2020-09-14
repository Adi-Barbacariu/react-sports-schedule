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
          <CompetitionBtn
            handleClick={this.props.handleClick}
            name="Champions League"
          />
          <CompetitionBtn
            handleClick={this.props.handleClick}
            name="Europa League"
          />
        </SportBtn>
        <SportBtn name="BASKETBALL">
          <CompetitionBtn handleClick={this.props.handleClick} name="NBA" />
        </SportBtn>
        <SportBtn name="UFC">
          <CompetitionBtn handleClick={this.props.handleClick} name="251" />
        </SportBtn>
      </div>
    );
  }
}
