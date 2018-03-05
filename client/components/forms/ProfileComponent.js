import React from "react";
import { Form, Header } from "semantic-ui-react";

class ProfileComponent extends React.Component {
  state = {
    data: {
      firstname: "",
      lastname: "",
    },
    loading: false,
    errors: {},
  }
  render() {
    const { data, loading, errors } = this.state;

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
            <Form.Input placeholder="First Name" fluid error={!!errors.firstname} />
            <Form.Input placeholder="Last Name" fluid error={!!errors.lastname} />
            <Form.Button content="Change Fullname" size="tiny" primary/>
          </Form.Group>
        </Form>

        <Header as="h3">Email</Header>
        <p>
          Providing your Email address help u address authenticity across the platform. Also,
          detect any suspecious activities in your account.
          The security team also communicate on any
          security issues belonging to your account using
          your official and verified email account.
        </p>
        <Form onSubmit={this.onSubmit} loading={loading} size="tiny">
          <Form.Group widths="equal">
            <Form.Input type="email" error={!!errors.email} />
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
            <Form.Input type="file" error={!!errors.file} />
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
            <Form.Input type="password" error={!!errors.newPassword} placeholder="New Password" />
            <Form.Input type="password" error={!!errors.confirmPassword} placeholder="Confirm New Password" />
            <Form.Button primary size="tiny" content="Change password" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ProfileComponent;
