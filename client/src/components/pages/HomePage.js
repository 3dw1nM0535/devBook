import React from "react";
import { Header, Grid, Segment } from "semantic-ui-react";

const style = {
  h1: {
    marginTop: "10em",
  },
};

const HomePage = () => (
  <Grid stackable columns={1}>
    <Grid.Column>
      <Segment textAlign="center" padded="very" style={style.h1}>
        <Header as="h1">Events.com</Header>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default HomePage;
