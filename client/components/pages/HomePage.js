import React from "react";
import { Header, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
          <Header as="h1">Welcome to Events.com</Header>
          <Link to="/login">Login</Link> or <Link to="/sign_up">Sign Up</Link>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default HomePage;
