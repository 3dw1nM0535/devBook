// Wrap main component to Redux store Provider and render to the DOM
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import decode from "jwt-decode";

import "semantic-ui-css/semantic.min.css";
import rootReducer from "./reducers/rootReducer";
import { userLoggedIn } from "./actions/actionCreators";

import App from "./App";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

if (localStorage.token) {
  const payload = decode(localStorage.token);
  const user = { token: localStorage.token, email: payload.email, confirmed: payload.confirmed };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept();
}
