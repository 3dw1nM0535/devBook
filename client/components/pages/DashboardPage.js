import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import io from "socket.io-client";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.socket = io("https://localhost:8080");
  }

  render() {
    const { isConfirmed } = this.props;

    return (
      <Grid container divided stackable>
        <Grid.Row columns={3}>
          <Grid.Column width={4} textAlign="center">
            <Segment textAlign="center">
              <Header as="h2">Profile section</Header>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} textAlign="center">
            { !isConfirmed && <ConfirmEmailMessage /> }
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Header as="h2">Notifications</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed,
  };
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(DashboardPage);
