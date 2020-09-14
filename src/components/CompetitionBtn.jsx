import React from "react";
import icon from "../img/championship.png";

export default class CompetitionBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={() => this.props.handleClick(this.props.name)}
        className="nav__league-name"
      >
        <img src={icon} alt="icon" /> {this.props.name}
      </button>
    );
  }
}
