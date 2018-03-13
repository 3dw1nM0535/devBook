import React from "react";
import { Header, Grid, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/styles.css";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;

    return (
      <Grid centered container stackable>
        <Grid.Row columns={3}>
          <Grid.Column width={4} textAlign="center">
            <Card centered>
              <Card.Content>
                <Image centered rounded src={user.imageURL} alt="Profile photo" />
                <Card.Header className="padding" textAlign="center" content={user.fullname} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8} textAlign="center">
            <Card centered>
              <Card.Content>
                <Header as="h2">Posts section</Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Card centered>
              <Card.Content>
                <Header as="h2">Push Notifications section</Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

ProfilePage.propTypes = {
  user: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ProfilePage);
