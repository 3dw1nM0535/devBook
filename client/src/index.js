// Wrap main component to Redux store Provider and render to the DOM
import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
