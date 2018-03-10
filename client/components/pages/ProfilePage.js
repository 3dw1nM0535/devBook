import React from "react";
import { Header, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import PropType from "prop-types";

import { fetchProfile } from "../../actions/authUser";

class ProfilePage extends React.Component {
  state = {
    user: {},
  };

  componentDidMount = () => this.props.fetchProfile()
    .then(user => this.setState({ user: user }));

  render() {
    const { user } = this.state;

    return (
      <Grid>
				<Header as="h2">Profile page</Header>
			</Grid>
    );
  }
}

ProfilePage.propTypes = {
  fetchProfile: PropType.func.isRequired,
};

export default connect(null, { fetchProfile })(ProfilePage);
