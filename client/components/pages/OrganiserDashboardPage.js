import React from "react";
import { Grid, Header } from "semantic-ui-react";

class OrganiserDashboardPage extends React.Component {
  render() {
    return (
      <Grid padded centered stackable columns={1}>
        <Grid.Column>
          <Header as="h2" textAlign = "center">Welcome to Events.com</Header>
        </Grid.Column>
      )
      </Grid>
    );
  }
}

export default OrganiserDashboardPage;
