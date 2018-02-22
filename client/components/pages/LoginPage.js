import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "../forms/LoginForm";

import { login } from "../../actions/auth";


class LoginPage extends React.Component {
  submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Grid padded centered stackable>
        <Grid.Column width={7}>
          <LoginForm submit={this.submit} />

          <Link to="/forgot-password">Forgot Password?</Link> or <Link to="/signup">Create an Account</Link>
        </Grid.Column>
      </Grid>
    );
  }
}
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginPage);
