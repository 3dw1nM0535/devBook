import React from "react";
import { Form, Header } from "semantic-ui-react";
import PropTypes from "prop-types";
import validator from "validator";

class ProfileComponent extends React.Component {
  state = {
    fullnames: {
      firstname: "",
      lastname: "",
    },
    email: {
      email: "",
    },
    passwords: {
      newPassword: "",
      confirmPassword: "",
    },
    file: {
      file: "",
    },
    loading: false,
    errors: {},
  }

  onEmailChange = (e) => {
    this.setState({ ...this.state.email, [e.target.name]: e.target.value });
  }

  onFullNameChange = (e) => {
    this.setState({ ...this.state.fullnames, [e.target.name]: e.target.value });
  }

  onPasswordsChange = (e) => {
    this.setState({ ...this.state.passwords, [e.target.name]: e.target.value });
  }

  onFileChange = (e) => {
    this.setState({ ...this.state.file, [e.target.name]: e.target.value });
  }

  submitFile = (e) => {
    e.preventDefault();
    const errors = this.validata(this.state.file);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  }

  submitEmail = (e) => {
    e.preventDefault();
    const errors = this.validata(this.state.email);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  }

  submitPasswords = (e) => {
    e.preventDefault();
    const errors = this.validata(this.state.passwords);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  }

  submitFullNames = (e) => {
    e.preventDefault();
    const errors = this.validata(this.state.fullnames);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  }

  validateFullName = (data) => {
    const error = {};

    if (!data.firstname) error.firstname = "Can't be Blank";
    if (!data.lastname) error.lastname = "Can't be Blank";

    return error;
  }

  validateEmail = (data) => {
    const error = {};

    if (!data.email) error.email = "Can't be Blank";
    if (!validator.email(data.email)) error.email = "Invalid email";

    return error;
  }

  validateFile = (data) => {
    const error = {};

    if (!data.file) error.file = "Can't be Blank";

    return error;
  }

  validatePasswords = (data) => {
    const error = {};

    if (!data.newPassword) error.newPassword = "Can't be Blank";
    if (!data.confirmPassword) error.confirmPassword = "Can't be Blank";
    if (!validator.equals(data.newPassword, data.confirmPassword)) error.confirmPassword = "Passwords do not match";

    return error;
  }

  render() {
    const {
      fullnames,
      email,
      passwords,
      file,
      loading,
      errors,
    } = this.state;

    return (
      <div>
        <Header as="h3">Your Fullnames</Header>
        <p>
          Your fullnames helps identify yourself across the platform.
          Also registering yourself on the platform with your real names helps others to easily
          search for you and invite you out to an event(public gathering or private event).
        </p>
        <Form onSubmit={this.onSubmit} loading={loading} size="tiny">
          <Form.Group widths="equal">
            <Form.Input placeholder="First Name" fluid error={!!errors.firstname} name="firstname" value={fullnames.firstname} onChange={this.onFullNameChange} />
            <Form.Input placeholder="Last Name" fluid error={!!errors.lastname} name="lastname" value={fullnames.lastname} onChange={this.onFullNameChange} />
            <Form.Button content="Change Fullname" size="tiny" primary/>
          </Form.Group>
        </Form>

        <Header as="h3">Email</Header>
        <p>
          Providing your Email address help u address authenticity across the platform. Also,
          detect any suspecious activities in your account.
          The security team also communicates on any
          security issues belonging to your account using
          your official and verified email account.
        </p>
        <Form onSubmit={this.onSubmit} loading={loading} size="tiny">
          <Form.Group widths="equal">
            <Form.Input type="email" placeholder="example@email.com" error={!!errors.email} name="email" value={email.email} onChange={this.onEmailChange} />
            <Form.Button content="Change Email" primary size="tiny" />
          </Form.Group>
        </Form>
        <Header as="h3">Profile photo</Header>
        <p>
          Profile photo identifies your across the platform and also helps
          people identify each other across the platform for interaction.
        </p>
        <Form onSubmit={this.onSubmit} loading={loading} size="tiny">
          <Form.Group widths="equal">
            <Form.Input type="file" error={!!errors.file} value={file.file} onChange={this.onFileChange} />
            <Form.Button primary size="tiny" content="Upload Photo" />
          </Form.Group>
        </Form>
        <Header as="h3">Change Password</Header>
        <p>
          Change your Password by providing a
          strong alphanueric
          character(<code>a-zA-Z0-9</code>) and
          incude a symbol(<code>?[]|~`$#^*&@</code>)
        </p>
        <Form onSubmit={this.onSubmit} loading={loading} size="tiny">
          <Form.Group widths="equal">
            <Form.Input type="password" error={!!errors.newPassword} value={passwords.newPassword} onChange={this.onPasswordsChange} placeholder="New Password" />
            <Form.Input type="password" error={!!errors.confirmPassword} value={passwords.confirmPassword} onChange={this.onPasswordsChange} placeholder="Confirm New Password" />
            <Form.Button primary size="tiny" content="Change password" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

ProfileComponent.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ProfileComponent;
