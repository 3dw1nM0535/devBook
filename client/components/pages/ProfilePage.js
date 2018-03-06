import React from "react";
import { Header, Grid } from "semantic-ui-react";

class ProfilePage extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Header as="h2">Profile Page</Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ProfilePage;
