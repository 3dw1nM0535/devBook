// Implement user routing as higher order component
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route { ...rest } render={ props => isAuthenticated ? <Component { ...props } /> : <Redirect to="/" /> } />
);

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

UserRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(UserRoute);
