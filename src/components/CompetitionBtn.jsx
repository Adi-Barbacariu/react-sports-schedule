import React from "react";
import icon from "../img/championship.png";
import { HandleClickContext } from "../handleClickContext";

class CompetitionBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = HandleClickContext;

  render() {
    return (
      <button
        onClick={() => this.context(this.props.name)}
        className="nav__league-name"
      >
        <img src={icon} alt="icon" /> {this.props.name}
      </button>
    );
  }
}

export default CompetitionBtn;
