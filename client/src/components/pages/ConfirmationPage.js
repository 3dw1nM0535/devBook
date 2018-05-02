import React from "react";
import { Message, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions/authUser";

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.props.confirmEmail(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }
  render() {
    const { success, loading } = this.state;

    return (
      <div>
        { loading && (
          <Message icon>
            <Icon name="circle notched" loading />
            <Message.Header>Validating your Email</Message.Header>
          </Message>
        )}

        { !loading && success && (
          <Message success icon>
            <Icon name="checkmark" />
            <Message.Content>
              <Message.Header>
                Thank you. You account has been verified
              </Message.Header>
              <Link to="/dashboard">Go to your Dashboard</Link>
            </Message.Content>
          </Message>
        )}

        { !loading && !success && (
          <Message negative icon>
            <Icon name="warning sign" />
            <Message.Content>
              <Message.Header>
                Oops! Invalid token
              </Message.Header>
            </Message.Content>
          </Message>
        )}
      </div>
    );
  }
}

ConfirmationPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  confirmEmail: PropTypes.func.isRequired,
};

export default connect(null, { confirmEmail: actions.confirmEmail })(ConfirmationPage);
