import React from "react";
import { Header, Grid, Segment } from "semantic-ui-react";

const style = {
  segment: {
    marginTop: "10em",
  },
};

const HomePage = () => (
  <div className="ui container">
    <Grid stackable columns={1}>
      <Grid.Column>
        <Segment textAlign="center" padded="very" style={style.segment}>
          <Header as="h1">Events.com</Header>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default HomePage;
