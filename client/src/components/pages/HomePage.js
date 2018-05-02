import React from "react";
import { Header, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <Grid centered stackable columns={4}>
    <Grid.Column>
      <Segment color="green" piled className="segment-padded" textAlign="center" padded>
        <Header as="h1">devBook</Header>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default HomePage;
