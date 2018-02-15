import React from "react";
import { Grid } from "semantic-ui-react";

import SignupForm from '../forms/SignupForm';
import { styles } from "../styles/styles";

class SignupPage extends React.Component {
  submit = data =>
    console.log(data);

  render() {
    return (
      <Grid style={styles.signupPage} centered stackable>
        <Grid.Column width={7}>
          <SignupForm submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignupPage;
