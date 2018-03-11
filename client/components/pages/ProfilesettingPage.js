import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import PropType from "prop-types";

import ProfileForm from "../forms/ProfileForm";
import { fetchProfile, updateProfile } from "../../actions/authUser";
import { uploadFile } from "../../actions/fileUpload";
import "../styles/styles.css";

class ProfilesettingPage extends React.Component {
  state = {
    imageURL: "",
    defaultPhoto: "https://res.cloudinary.com/dazskjikr/image/upload/v1520713650/363633-200.png",
  };

  componentDidMount = () => this.props.fetchProfile().then(user => this.setState({ data: user }));

  submit = data => this.props.updateProfile(data);

  render() {
    const { imageURL, defaultPhoto } = this.state;

    return (
      <Grid centered padded stackable columns={2}>
        <Grid.Column>
          <ProfileForm submit={this.submit} data={this.state.data} />
        </Grid.Column>
        <Grid.Column>
          { !imageURL ?
            <Image rounded size="medium" src={defaultPhoto} alt="profile-image" />
            :
            <Image rounded size="medium" src={imageURL} alt="profile-image" />
          }
           <label className="fileContainer">
            Upload a picture
            <Icon name="upload" />
            <input type="file" id="file" onChange={this.handleFileUpload} />
          </label>
        </Grid.Column>
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
  // uploadFile: PropType.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    fetchProfile,
    updateProfile,
    uploadFile,
  },
)(ProfilesettingPage);
