import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const GuestOrgRoutes = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route { ...rest } render={ props => !isAuthenticated ?
    <Component { ...props } /> :
    <Redirect to="/organiser/dashboard" />}
  />
);

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.company.token,
  };
}

GuestOrgRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(GuestOrgRoutes);
