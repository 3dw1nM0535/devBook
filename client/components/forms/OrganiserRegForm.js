import React from "react";
import { Form, Button } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import validator from "validator";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";

class OrganiserRegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        companyName: "",
        twitterName: "",
        location: "",
        countryHQ: "",
        email: "",
        companyLogo: "",
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
      this.props.submit(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};

    if (!data.companyName) errors.companyName = "Can't be Blank";
    if (!data.twitterName) errors.twitterName = "Can't be Blank";
    if (!data.location) errors.location = "Can't be Blank";
    if (!data.countryHQ) errors.countryHQ = "Can't be Blank";
    if (!data.email) errors.email = "Can't be Blank";
    if (!isEmail(data.email)) errors.email = "Invalid email address. Should be of format example@email.com";
    if (!data.companyLogo) errors.companyLogo = "Can't be Blank";
    if (!data.password) errors.password = "Can't be Blank";
    if (!data.confirmPassword) errors.confirmPassword = "Can't be Blank";
    if (!validator.equals(data.password, data.confirmPassword)) errors.confirmPassword = "Passwords must match";

    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading} size="tiny" unstackable={false}>
        <Form.Field error={!!errors.companyName}>
          <label htmlFor="companyName">Company/Organisation Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Provide valid business name"
            onChange={this.onChange}
            value={data.companyName}
          />
          { errors.companyName && <InlineError text={errors.companyName} /> }
        </Form.Field>
        <Form.Field error={!!errors.twitterName}>
          <label htmlFor="twitterName">Twitter Account Name(verified acc)</label>
          <input
            type="text"
            name="twitterName"
            id="twitterName"
            placeholder="Provide verified Twitter Account Name"
            onChange={this.onChange}
            value={data.twitterName}
          />
          { errors.twitterName && <InlineError text={errors.twitterName} /> }
        </Form.Field>
        <Form.Field error={!!errors.location}>
          <label htmlFor="location">Company/Organisation Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Business premises location"
            onChange={this.onChange}
            value={data.location}
          />
          { errors.location && <InlineError text={errors.location} /> }
        </Form.Field>
        <Form.Field error={!!errors.countryHQ}>
          <label htmlFor="countryHQ">Country of Operation(Headquaters)</label>
          <input
            type="text"
            name="countryHQ"
            id="countryHQ"
            placeholder="Headquaters/Country of Operation"
            onChange={this.onChange}
            value={data.countryHQ}
          />
          { errors.countryHQ && <InlineError text={errors.countryHQ} /> }
        </Form.Field>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Company/Organisation Email</label>
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
        <Form.Field error={!!errors.companyLogo}>
          <label htmlFor="companyLogo">Company/Organisation Logo</label>
          <input
            type="file"
            placeholder="Company/Organisation Logo"
            name="companyLogo"
            id="companyLogo"
            onChange={this.onChange}
          />
          { errors.companyLogo && <InlineError text={errors.companyLogo} /> }
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.onChange}
            value={data.password}
          />
          { errors.password && <InlineError text={errors.password} /> }
        </Form.Field>
        <Form.Field error={!!errors.confirmPassword}>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            onChange={this.onChange}
            value={data.confirmPassword}
          />
          { errors.confirmPassword && <InlineError text={errors.confirmPassword} /> }
        </Form.Field>
        <Button size="tiny" color="green">Register Business</Button>
      </Form>
    );
  }
}

OrganiserRegForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default OrganiserRegForm;
