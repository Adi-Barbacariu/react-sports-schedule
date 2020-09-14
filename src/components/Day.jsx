import React from "react";

export default class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="schedule__day">
        <p className="schedule__date">{this.props.date}</p>

        <div className="schedule__matches">{this.props.children}</div>
      </div>
    );
  }
}
