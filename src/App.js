import React, { Component } from "react";
import withConditionalRender from "./withConditional";
import Player from "./Player";
import NotLoggedIn from "./NotLoggedIn.js";
import "./App.css";

const DynamicComp = withConditionalRender(Player)(NotLoggedIn);

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }
  
  render() {
      return (
        <DynamicComp />
      )
  }
}

export default App;
