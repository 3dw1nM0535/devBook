import React from "react";
import { Form, Button } from "semantic-ui-react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false,
      errors: {},
    };
  }
  render() {
    const { data, loading, errors } = this.state;
    return (
        <Form size="small" unstackable={false} onSubmit={this.onSubmit} loading={loading}>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              onChange={this.onChange}
              value={data.email}
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
          <Button primary>Login</Button>
        </Form>
      );
  }
}

export default LoginForm;
