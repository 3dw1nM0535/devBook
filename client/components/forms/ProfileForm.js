import React from "react";
import { Form, Card } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstname: "",
        lastname: "",
        email: "",
      },
      loading: false,
      errors: {},
    };
  }

  componentWillReceiveProps = (nextProps) => {
    const data = {
      firstname: nextProps.data.firstname,
      lastname: nextProps.data.lastname,
      email: nextProps.data.email,
    };
    this.setState({ data });
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

    if (!data.firstname) errors.firstname = "Can't be Blank";
    if (!data.lastname) errors.lastname = "Can't be Blank";
    if (!data.email) errors.email = "Can't be Blank";
    if (!isEmail(data.email)) errors.email = "Invalid email";

    return errors;
  }

  render() {
    const { data, loading, errors } = this.state;

    return (
      <Card centered>
        <Card.Content>
          <Form loading={loading} onSubmit={this.onSubmit}>
          <Card.Description content="Identify yourself on the platform with your firstname." />
            <Form.Field error={!!errors.firstname}>
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Your first name"
                value={data.firstname}
                onChange={this.onChange}
              />
              { errors.firstname && <InlineError text={errors.firstname} /> }
            </Form.Field>
            <Card.Description content="Identify yourself on the platfrom with your lastname." />
            <Form.Field error={!!errors.lastname}>
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Your last name"
                value={data.lastname}
                onChange={this.onChange}
              />
              { errors.lastname && <InlineError text={errors.lastname} /> }
            </Form.Field>
            <Card.Description content="Your email for communication about your account and bookings,
              and also security issues concerning your account." />
            <Form.Field error={!!errors.email}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={data.email}
                onChange={this.onChange}
              />
              { errors.email && <InlineError text={errors.email} /> }
            </Form.Field>
            <Form.Button content="Update Profile" color="green" />
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

ProfileForm.propTypes = {
  submit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default ProfileForm;
