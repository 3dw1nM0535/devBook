import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import DashboardPage from "./components/pages/DashboardPage";

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/login" exact component={LoginPage} />
    <Route location={location} path="/signup" exact component={SignupPage} />
    <Route location={location} path="/dashboard" exact component={DashboardPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
