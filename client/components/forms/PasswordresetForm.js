import React from "react";
import { Form, Button, Card } from "semantic-ui-react";
import Validator from "validator";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";


class PasswordresetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        token: this.props.token,
        newPassword: "",
        confirmNewPassword: "",
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

    if (!data.newPassword) errors.newPassword = "Can't be Blank";
    if (!data.confirmNewPassword) errors.confirmNewPassword = "Can't be Blank";
    if (!Validator.equals(data.newPassword, data.confirmNewPassword)) errors.confirmNewPassword = "Passwords do not match";

    return errors;
  }
  render() {
    const { data, loading, errors } = this.state;

    return (
      <Card centered fluid>
      	<Card.Content>
         <Form onSubmit={this.onSubmit} unstackable={false} loading={loading}>
          <Form.Field error={!!errors.newPassword}>
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="New Password"
              onChange={this.onChange}
              value={data.newPassword}
            />
            { errors.newPassword && <InlineError text={errors.newPassword} /> }
          </Form.Field>
          <Form.Field error={!!errors.confirmNewPassword}>
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              name="confirmNewPassword"
              id="confirmNewPassword"
              placeholder="Confirm New Password"
              onChange={this.onChange}
              value={data.confirmNewPassword}
            />
            { errors.confirmNewPassword && <InlineError text={errors.confirmNewPassword} /> }
          </Form.Field>
          <Button color="green">Reset Password</Button>
        </Form>
        </Card.Content>
      </Card>
    );
  }
}

PasswordresetForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};


export default PasswordresetForm;
