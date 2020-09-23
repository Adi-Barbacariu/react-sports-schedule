import React from "react";
import Nav from "./Nav";
import Content from "./Content";
import coverFootball from "../img/coverFootball.jpg";
import coverBasket from "../img/coverbasket.jpg";
import coverUFC from "../img/coverUFC.jpg";
import { HandleClickContext } from "../handleClickContext";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { competition: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(competition) {
    this.setState({ competition: competition });
  }

  render() {
    let style = { backgroundImage: `url(${coverFootball})` };

    if (this.state.competition === "NBA") {
      style = { backgroundImage: `url(${coverBasket})` };
    } else if (this.state.competition === "251") {
      style = { backgroundImage: `url(${coverUFC})` };
    }

    return (
      <React.Fragment>
        <div className="container" style={style}>
          <div className="container__overlay"></div>
        </div>
        <main className="main">
          <HandleClickContext.Provider value={this.handleClick}>
            <Nav />
          </HandleClickContext.Provider>
          <section className="main__section">
            <Content currentCompetition={this.state.competition} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}
