import React from "react";
import withConditionalRender from "./withConditional";
import Player from "./components/Player/Player";
import NotLoggedIn from "./components/NotLoggedIn/NotLoggedIn.js";
import "./App.css";

const DynamicComp = withConditionalRender(Player)(NotLoggedIn);

const App = () => {
  console.log(process.env.react_app_node_env)
  return <DynamicComp />;
};

export default App;
