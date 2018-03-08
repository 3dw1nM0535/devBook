import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import io from "socket.io-client";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

class AttendeeDashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.socket = io("https://localhost:8080");
  }

  render() {
    const { isConfirmed, user } = this.props;

    return (
      <Grid container divided stackable>
				<Grid.Row columns={3}>
					<Grid.Column width={4} textAlign="center" only="tablet mobile computer">
						<Segment textAlign="center">
							<Header as="h2">Profile section</Header>
						</Segment>
					</Grid.Column>
					<Grid.Column width={8} textAlign="center">
						<Header as="h2">Posts section</Header>
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
		user: state.user,
  };
}

AttendeeDashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AttendeeDashboardPage);
