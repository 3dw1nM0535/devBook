import React from "react";
import { Message } from "semantic-ui-react";

class ConfirmEmailMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  handleOnDimsiss = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true });
    }, 5000);
  }

  renderMessage = () => (
    <Message onDismiss={this.handleOnDimsiss} header="Welcome to Events.com"
    content="Please check your Email address to verify your account"
    />
  );
  render() {
    const { visible } = this.state;

    return (
      <div>
        { visible && this.renderMessage() }
      </div>
    );
  }
}

export default ConfirmEmailMessage;
