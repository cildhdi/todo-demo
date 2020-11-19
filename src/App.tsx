import React from "react";
import "./App.less";
import { Left } from "./components/Left";
import { Nav } from "./components/Nav";
import { Right } from "./components/Right";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Left className="left" />
        <Right className="right" />
      </div>
    </div>
  );
}

export default App;
