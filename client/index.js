// Wrap main component to Redux store Provider and render to the DOM
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import decode from "jwt-decode";

import "semantic-ui-css/semantic.min.css";
import { userLoggedIn } from "./actions/actionCreators";
import configureStore from "./store/store";

import App from "./App";

const store = configureStore();

// Create an enhanced history that syncs navigation events with our store

if (localStorage.token) {
  const payload = decode(localStorage.token);
  const user = { token: localStorage.token, email: payload.email, confirmed: payload.confirmed };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const nextReducer = require("./App").default;
    store.replaceRducer(nextReducer);
  });
}
