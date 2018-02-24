import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import OrganiserRegForm from "../forms/OrganiserRegForm";
import { register } from "../../actions/authOrg";

class OrganiserRegPage extends React.Component {
  submit = data => this.props.register(data).then(() => this.props.history.push("/organiser/dashboard"));

  render() {
    return (
      <Grid padded centered stackable>
        <Grid.Column width={10}>
          <Header as="h2" textAlign="center">Welcome to Events.com</Header>
          <OrganiserRegForm submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

OrganiserRegPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(OrganiserRegPage);
