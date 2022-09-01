import React from "react";
import ReactDOM from "react-dom";
import Homepage from "homepage/Homepage";

import "./index.css";
import Header from "./components/Header";

const App = () => (
  <div className="container">
    <Header />
    <Homepage />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
