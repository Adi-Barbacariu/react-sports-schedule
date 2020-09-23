import React, { Component } from "react";
import coverFootball from "../img/coverFootball.jpg";
import coverBasket from "../img/coverbasket.jpg";
import coverUFC from "../img/coverUFC.jpg";

export default class Background extends Component {
  render() {
    const { competition } = this.props;

    let img = coverFootball;

    if (competition === "NBA") {
      img = coverBasket;
    } else if (competition === "251") {
      img = coverUFC;
    }

    return (
      <div className="container" style={{ backgroundImage: `url(${img})` }}>
        <div className="container__overlay"></div>
      </div>
    );
  }
}
