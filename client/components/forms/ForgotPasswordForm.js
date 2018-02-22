import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";

import InlineError from "../messages/InlineError";

class ForgotPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
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

    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading} size="tiny">
        { errors.global && (
          <Message negative>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email address for password reset"
            onChange={this.onChange}
            value={data.email}
          />
          { errors.email && <InlineError text={errors.email} /> }
        </Form.Field>
        <Button size="tiny" color="green">Send Password Reset Email</Button>
      </Form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
