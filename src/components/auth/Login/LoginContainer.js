import React, { Component } from 'react';
import LoginSection from './LoginSection';
import SendResetSection from '../Password/SendReset/SendResetSection';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showPasswordRequest: false, email: '' };
  }

  render() {
    const props = {
      show: () => this.setState({ showPasswordRequest: true }),
      hide: () => this.setState({ showPasswordRequest: false }),
      updateEmail: email => this.setState({ email }),
      email: this.state.email,
    };

    // If the user is looking for a password, show them that form
    if (this.state.showPasswordRequest) {
      return <SendResetSection {...props} />;
    }

    // Otherwise default to the login form
    return <LoginSection {...props} />;
  }
}

export default LoginContainer;
