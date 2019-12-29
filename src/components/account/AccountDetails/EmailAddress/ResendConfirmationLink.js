import React from 'react';
import { connect } from 'react-redux';
import { accountOperations } from '../../../../ducks/account';
import { Icon } from '../../../elements';

class ResendConfirmationLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'ready' };
  }

  resend = async () => {
    if (this.state.status === 'ready') {
      this.setState({ status: 'sending' });
      await this.props.resend();
      this.setState({ status: 'success' });
    }
  }

  renderLink = () => {
    if (this.state.status === 'success') {
      return <span>Resent <Icon type="check" /></span>;
    }

    if (this.state.status === 'sending') {
      return <span>Resending...</span>;
    }

    return (
      <a onClick={this.resend}>
        Resend confirmation link <Icon type="angleRight" />
      </a>
    );
  }

  render() {
    return (
      <span className="error" style={{ fontWeight: '500', margin: 0, padding: 0 }}>
        Please confirm your email. &nbsp;
        {this.renderLink()}
      </span>
    );
  }
}

const mapDispatch = { resend: accountOperations.resendEmailConfirmation };

export default connect(null, mapDispatch)(ResendConfirmationLink);
