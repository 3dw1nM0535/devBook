import React from "react";
import { Grid, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PasswordresetForm from "../forms/PasswordresetForm";
import { resetPasswordRequest, validateToken } from "../../actions/authUser";

class PasswordresetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.props.validateToken(this.props.match.params.token).then(() =>
      this.setState({ loading: false, success: true })).catch(() =>
      this.setState({ loading: false, success: false }));
  }

  submit = data => this.props.resetPasswordRequest(data).then(() =>
    this.props.history.push("/login"));


  render() {
    const { success, loading } = this.state;
    const token = this.props.match.params.token;

    return (
      <Grid padded centered stackable>
        <Grid.Column width={7}>
          { loading && <Message>Loading...</Message> }
          { !loading && success && <PasswordresetForm submit={this.submit} token={token} /> }
          { !loading && !success && <Message>Invalid Token</Message> }
        </Grid.Column>
      </Grid>
    );
  }
}

PasswordresetPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  resetPasswordRequest: PropTypes.func.isRequired,
  validateToken: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(null, { resetPasswordRequest, validateToken })(PasswordresetPage);
