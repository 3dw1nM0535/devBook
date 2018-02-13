import React from "react";
import { Grid } from "semantic-ui-react";

import LoginForm from "../forms/LoginForm";

const LoginPage = () => (
  <Grid centered stackable>
    <Grid.Column width={7}>
      <LoginForm />
    </Grid.Column>
  </Grid>
);

export default LoginPage;
