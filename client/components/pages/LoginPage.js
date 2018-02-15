import React from "react";
import { Grid } from "semantic-ui-react";

import LoginForm from "../forms/LoginForm";
import { styles } from "../styles/styles";


class LoginPage extends React.Component {

  submit = data => console.log(data);

  render() {
    return (
      <Grid style={styles.loginPage} centered stackable>
        <Grid.Column width={7}>
          <LoginForm submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginPage;
