// Wrap main component to Redux store Provider and render to the DOM
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";

import "semantic-ui-css/semantic.min.css";
import "./src/style/styles.css";

import { userLoggedIn } from "./src/actions/actionCreators";
import configureStore, { history } from "./src/store/store";
import setAuthorizationHeader from "./src/utils/setAuthorizationHeader";
import decoder from "./src/utils/decoder";

import App from "./src/App";

const store = configureStore();

if (localStorage.token) {
  const payload = decoder(localStorage.token);
  const user = {
    token: localStorage.token,
    _id: payload._id,
    imageURL: payload.imageURL,
    fullname: payload.fullname,
    confirmed: payload.confirmed,
    age: payload.age,
  };

  setAuthorizationHeader(localStorage.token);
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept("./src/App", () => {
    const NextApp = require("./src/App").default;
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <NextApp />
        </Router>
      </Provider>,
      document.getElementById("root"),
    );
  });
}
