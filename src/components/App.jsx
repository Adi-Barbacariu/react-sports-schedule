import React from "react";
import Nav from "./Nav";
import Content from "./Content";
import { HandleClickContext } from "../handleClickContext";
import Background from "./Background";

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
    return (
      <React.Fragment>
        <Background competition={this.state.competition} />
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
