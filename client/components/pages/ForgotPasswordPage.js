import React from "react";
import { Message, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { forgotPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }

  submit = data => this.props.forgotPasswordRequest(data).then(() =>
    this.setState({ success: true }));

  render() {
    return (
      <Grid padded stackable centered>
        <Grid.Column width={7}>
          { this.state.success ? (
          <Message>Password reset link has been sent. Check your Email.</Message>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
        </Grid.Column>
      </Grid>
    );
  }
}

ForgotPasswordPage.propTypes = {
  forgotPasswordRequest: PropTypes.func.isRequired,
};

export default connect(null, { forgotPasswordRequest })(ForgotPasswordPage);
