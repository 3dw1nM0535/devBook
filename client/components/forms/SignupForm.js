import React from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";

import { countryOptions } from '../../data/common';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        phoneNumber: "",
        dob: "",
        country: "",
        city: "",
        address: "",
        password: "",
        confirmPassword: "",
      },
      loading: false,
      errors: {},
    };
  }

  render() {
    const { data, loading, errors } = this.state;
    return (
        <Form size="small" unstackable={false} onSubmit={this.onSubmit} loading={loading}>
          <Form.Field>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Provide your First name"
              onChange={this.onChange}
              value={data.firstname}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Provide your Last name"
              onChange={this.onChange}
              value={data.lastname}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@email.com"
              onChange={this.onChange}
              value={data.email}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Provide your preferred username"
              onChange={this.onChange}
              value={data.username}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dob">DOB</label>
            <input
              type="text"
              name="dob"
              id="dob"
              placeholder="DD-MM-YYYY"
              onChange={this.onChange}
              value={data.dob}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone number"
              onChange={this.onChange}
              value={data.phoneNumber}
            />
          </Form.Field>
          <Form.Field>
          <label htmlFor="country">Select your country</label>
            <Dropdown
              selection
              placeholder="Select your country..."
              options={countryOptions}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="city">City/Town</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              onChange={this.onChange}
              value={data.city}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.onChange}
              value={data.password}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Password"
              onChange={this.onChange}
              value={data.confirmPassword}
            />
          </Form.Field>
          <Button primary>Sign Up</Button>
        </Form>
    );
  }
}

export default SignupForm;
