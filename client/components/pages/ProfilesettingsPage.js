import React from "react";
import { Header, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfileForm from "../forms/ProfileForm";
import { fetchProfile, updateProfile } from "../../actions/authUser";

class ProfilesettingsPage extends React.Component {
  state = {
    data: {},
  }
  componentDidMount = () => this.props.fetchProfile(this.props._id)
    .then(user => this.setState({ data: user }));

  submit = (data, file) => this.props.updateProfile(data, file).then(() => this.props.history.push("/profile"));

  render() {
    const { data } = this.state;

    return (
      <Grid>
        <Grid.Column width={9}>
          <Header as="h1">Profile settings</Header>
          <ProfileForm data={data} submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

ProfilesettingsPage.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  updateProfile: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    _id: state.user._id,
  };
}

export default connect(mapStateToProps, { fetchProfile, updateProfile })(ProfilesettingsPage);
