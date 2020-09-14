import React from "react";
import icon from "../img/arrow.png";

export default class SportBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newState = this.state.isOpened ? false : true;

    this.setState({ isOpened: newState });
  }

  render() {
    const arrowStyle = this.state.isOpened
      ? { transform: "rotate(0deg)" }
      : null;

    return (
      <React.Fragment>
        <button onClick={this.handleClick} className="nav__sport-name">
          {this.props.name} <img src={icon} alt="arrow" style={arrowStyle} />
        </button>
        {this.state.isOpened ? this.props.children : null}
      </React.Fragment>
    );
  }
}
