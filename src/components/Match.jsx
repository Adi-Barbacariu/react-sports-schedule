import React from "react";
import thumbnail from "../img/match4-240px.jpg";

export default class Match extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let live = this.props.live ? "LIVE" : "";

    let imgStyle = { backgroundImage: `url(${thumbnail})` };
    return (
      <div className="schedule__match">
        <p className="match__time match__time--live">
          <span>{live}</span> <br /> {this.props.time}
        </p>

        <div className="match__img match__img--1" style={imgStyle}></div>

        <p className="match__teams">
          {this.props.host} vs. {this.props.guest} <br />{" "}
          <span>{this.props.competition}</span>
        </p>
      </div>
    );
  }
}
