import React from "react";
import { Form, Button } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import validator from "validator";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        firstname: "",
        lastname: "",
        dob: "",
        password: "",
        confirmPassword: "",
      },
      loading: false,
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(err =>
        this.setState({ errors: err.response.data.errors, loading: false }));
    }
  }

  validate = (data) => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = "Invalid Email";
    if (!data.email) errors.email = "Provide your email";
    if (!validator.isAlpha(data.firstname)) errors.firstname = "Invalid name";
    if (!data.firstname) errors.firstname = "Provide your firstname";
    if (!validator.isAlpha(data.lastname)) errors.lastname = "Invalid name";
    if (!data.lastname) errors.lastname = "Provide your lastname";
    if (!data.password) errors.password = "Provide a password for security";
    if (!data.confirmPassword) errors.confirmPassword = "Provide a perfect match of your current password";
    if (!validator.equals(data.password, data.confirmPassword)) errors.confirmPassword = "Passwords do not match";
    if (!data.dob) errors.dob = "Provide your Date of Birth";

    return errors;
  }

  render() {
    const { data, loading, errors } = this.state;
    return (
        <Form unstackable={false} onSubmit={this.onSubmit} loading={loading}>
          <Form.Field error={!!errors.firstname}>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Provide your First name"
              onChange={this.onChange}
              value={data.firstname}
            />
            { errors.firstname && <InlineError text={errors.firstname} /> }
          </Form.Field>
          <Form.Field error={!!errors.lastname}>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Provide your Last name"
              onChange={this.onChange}
              value={data.lastname}
            />
            { errors.lastname && <InlineError text={errors.lastname} /> }
          </Form.Field>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@email.com"
              onChange={this.onChange}
              value={data.email}
            />
            { errors.email && <InlineError text={errors.email} /> }
          </Form.Field>
          <Form.Field error={!!errors.dob}>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              placeholder="DD-MM-YYYY"
              onChange={this.onChange}
              value={data.dob}
            />
            { errors.dob && <InlineError text={errors.dob} /> }
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.onChange}
              value={data.password}
            />
            { errors.password && <InlineError text={errors.password} /> }
          </Form.Field>
          <Form.Field error={!!errors.confirmPassword}>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Password"
              onChange={this.onChange}
              value={data.confirmPassword}
            />
            { errors.confirmPassword && <InlineError text={errors.confirmPassword} /> }
          </Form.Field>
          <Button color="green">Sign Up</Button>
        </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SignupForm;
