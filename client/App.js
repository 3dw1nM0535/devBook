import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TopNavigation from "./components/navigation/TopNavigation";
import NavBar from "./components/navigation/NavBar";

import GuestRoute from "./components/routes/GuestRoutes";
import UserRoute from "./components/routes/UserRoutes";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import AttendeeDashboardPage from "./components/pages/AttendeeDashboardPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import PasswordresetPage from "./components/pages/PasswordresetPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    { !isAuthenticated ? <NavBar /> : <TopNavigation /> }
    <GuestRoute location={location} path="/" exact component={HomePage} />
    <UserRoute location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute location={location} path="/signup" exact component={SignupPage} />
    <GuestRoute location={location} path="/forgot-password" exact component={ForgotPasswordPage} />
    <GuestRoute location={location} path="/forgot-password/:token" exact component={PasswordresetPage} />
    <UserRoute location={location} path="/dashboard" exact component={AttendeeDashboardPage} />
  </div>
);

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps)(App));
