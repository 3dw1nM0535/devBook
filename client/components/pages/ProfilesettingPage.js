import React from "react";
import { Grid, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import PropType from "prop-types";
import request from "superagent";

import ProfileForm from "../forms/ProfileForm";
import { fetchProfile, updateProfile, updateImage } from "../../actions/authUser";
import "../styles/styles.css";

class ProfilesettingPage extends React.Component {
  state = {
    data: {},
    uploadCloudinaryURL: "",
  };

  componentDidMount = () => this.props.fetchProfile().then(user => this.setState({ data: user }));

  handleDrop = () => {
    const file = this.inputFile.files[0];
    this.handleImageUpload(file);
  }

  handleImageUpload = (file) => {
    const upload = request.post("https://api.cloudinary.com/v1_1/dazskjikr/image/upload")
      .field("upload_preset", "ga3pypz9")
      .field("file", file);

    upload.end((err, res) => {
      this.setState({
        uploadCloudinaryURL: res.body.secure_url,
      });

      this.props.updateImage(this.state.uploadCloudinaryURL);
    });
  }

  submit = data => this.props.updateProfile(data);

  render() {
    const {
      data,
      uploadCloudinaryURL,
      label,
    } = this.state;
    const { user } = this.props;

    return (
      <Grid centered padded stackable columns={2}>
        <Grid.Column>
          <ProfileForm submit={this.submit} data={data} />
        </Grid.Column>
        <Grid.Column>
          { uploadCloudinaryURL && <Image size="small" rounded src={uploadCloudinaryURL} /> }
          { !uploadCloudinaryURL && user.imageURL && <Image size="small" rounded src={user.imageURL} /> }
          <label className="fileContainer">
            Upload photo
            <Icon name="upload" />
            <input type="file" ref={(ref) => { this.inputFile = ref; }} onChange={this.handleDrop} />
          </label>
        </Grid.Column>
      </Grid>
    );
  }
}

ProfilesettingPage.propTypes = {
  fetchProfile: PropType.func.isRequired,
  updateProfile: PropType.func.isRequired,
  updateImage: PropType.func.isRequired,
  user: PropType.shape({
    imageURL: PropType.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchProfile,
    updateProfile,
    updateImage,
  },
)(ProfilesettingPage);
