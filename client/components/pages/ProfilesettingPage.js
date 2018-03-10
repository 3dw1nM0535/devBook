import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import PropType from "prop-types";

import ProfileForm from "../forms/ProfileForm";
import decoder from "../../utils/decoder";
import { fetchProfile, updateProfile } from "../../actions/authUser";

class ProfilesettingPage extends React.Component {
  state = {
    data: {},
  };

  componentDidMount = () => {
    const decoded = decoder(this.props.token);
    this.props.fetchProfile(decoded._id).then(user => this.setState({ data: user }));
  }

  submit = data => this.props.updateProfile(data);

  render() {
    return (
      <Grid centered padded stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <ProfileForm submit={this.submit} data={this.state.data} />
          </Grid.Column>
          <Grid.Column>
            <Header as="h4">Profile photo</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}

ProfilesettingPage.propTypes = {
  fetchProfile: PropType.func.isRequired,
  updateProfile: PropType.func.isRequired,
  token: PropType.string.isRequired,
};

export default connect(mapStateToProps, { fetchProfile, updateProfile })(ProfilesettingPage);
