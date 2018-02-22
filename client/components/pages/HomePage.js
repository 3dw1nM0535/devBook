import React from "react";
import { Header, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { styles } from "../styles/styles";

const HomePage = () => (
  <Grid stackable columns={1}>
    <Grid.Column>
      <Segment textAlign="center" padded="very" style={styles.segment}>
        <Header as="h1">Welcome to Events.com</Header>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default HomePage;
