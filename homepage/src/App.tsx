import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage";

import "./index.css";

const App = () => (
  <div className="container">
    <Homepage />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
