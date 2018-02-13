import React from "react";
import { Grid } from "semantic-ui-react";
import SignupForm from '../forms/SignupForm';

const SignupPage = () => (
  <Grid centered stackable>
    <Grid.Column width={7}>
      <SignupForm />
    </Grid.Column>
  </Grid>
);

export default SignupPage;
