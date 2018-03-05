import React from "react";
import { Header, Grid } from "semantic-ui-react";

import ProfileComponent from "../forms/ProfileComponent";

class ProfilesettingsPage extends React.Component {
  submit = data => console.log(data);

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Header as="h1">Profile settings</Header>
          <ProfileComponent submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default ProfilesettingsPage;
