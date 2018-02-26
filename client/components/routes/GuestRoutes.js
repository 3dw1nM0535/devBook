// Implement guest routing as higher order component
import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route { ...rest } render={ props => !isAuthenticated ?
    (
      <Component { ...props } />
    ) : (
      <Redirect to="/dashboard" />
    )
  }
  />
);

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

GuestRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(GuestRoute);
