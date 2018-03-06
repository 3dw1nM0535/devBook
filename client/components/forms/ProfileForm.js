import React from "react";
import { Form, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import validator from "validator";

import InlineError from "../messages/InlineError";

class ProfileForm extends React.Component {
  state = {
    data: {
      _id: this.props.data._id,
      firstname: this.props.data.firstname,
      lastname: this.props.data.lastname,
      email: this.props.data.email,
    },
    file: this.props.data.profilePhoto,
    error: {},
    loading: false,
  };


  componentWillReceiveProps = (props) => {
    this.setState({
      data: {
        _id: props.data._id,
        firstname: props.data.firstname,
        lastname: props.data.lastname,
        email: props.data.email,
      },
      file: props.data.profilePhoto,
    });
  }

  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const error = this.validate(this.state.data);
    this.setState({ error });
    if (Object.keys(error).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data, this.state.file).catch(err =>
        this.setstate({ error: err.response.data.errors, loading: false }));
    }
  }

  validate = (data) => {
    const error = {};

    if (!data.firstname) error.firstname = "Can't be Blank";
    if (!data.lastname) error.lastname = "Can't be Blank";
    if (!data.email) error.email = "Can't be Blank";
    if (!validator.isEmail(data.email)) error.email = "Invalid Email";

    return error;
  }

  handleFileInput = (e) => {
    e.preventDefault();
    const selected = document.getElementById("file").files[0].name;
    this.setState({
      file: selected,
    });
  }

  render() {
    const {
      data,
      loading,
      error,
      success,
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit} size="tiny" loading={loading}>
      { success && <Message
        success
        header="Profile update completed"
        content="You have successfully updated your profile information"
        /> }
        <Form.Input type="text" name="firstname" id="firstname" label="Firstname" placeholder="First Name" onChange={this.onChange} value={data.firstname} error={!!error.firstname} />
        { error.firstname && <InlineError text={error.firstname} /> }
        <Form.Input type="text" name="lastname" id="lastname" label="Last Name" placeholder="Last Name" onChange={this.onChange} value={data.lastname} error={!!error.lastname} />
        { error.lastname && <InlineError text={error.lastname} /> }
        <Form.Input type="email" name="email" id="email" label="Email" placeholder="example@email.com" onChange={this.onChange} value={data.email} error={!!error.email} />
        { error.email && <InlineError text={error.email} /> }
        <Form.Input type="file" id="file" label="Profile Photo" onChange={this.handleFileInput} />
        <Form.Button size="tiny" content="Update Profile" color="green" />
      </Form>
    );
  }
}

ProfileForm.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
  }).isRequired,
  submit: PropTypes.func.isRequired,
};

export default ProfileForm;
