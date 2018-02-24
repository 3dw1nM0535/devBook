import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SignupForm from '../forms/SignupForm';

import { signup } from "../../actions/authUser";

class SignupPage extends React.Component {
  submit = data => this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Grid padded centered stackable>
        <Grid.Column width={7}>
          <SignupForm submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  signup: PropTypes.func.isRequired,
};

export default connect(null, { signup })(SignupPage);
