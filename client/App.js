import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import DashboardPage from "./components/pages/DashboardPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import PasswordresetPage from "./components/pages/PasswordresetPage";

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/login" exact component={LoginPage} />
    <Route location={location} path="/signup" exact component={SignupPage} />
    <Route location={location} path="/dashboard" exact component={DashboardPage} />
    <Route location={location} path="/forgot-password" exact component={ForgotPasswordPage} />
    <Route location={location} path="/forgot-password/:token" exact component={PasswordresetPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
