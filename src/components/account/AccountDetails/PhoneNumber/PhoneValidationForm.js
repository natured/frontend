import React from 'react';
import { connect } from 'react-redux';
import ReactCodeInput from 'react-code-input';
import { Loader, Icon } from '../../../elements';
import { accountOperations } from '../../../../ducks/account';
import ResendValidationLink from './ResendValidationLink';
import './phoneValidation.scss';

const sleep = (ms = 0) => (new Promise(r => setTimeout(r, ms)));

class PhoneValidationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'ready' };
  }

  handleCode = async (code) => {
    if (code.length === 4) {
      this.setState({ status: 'loading' });
      const { success } = await this.props.checkPhoneCode(code);
      if (success) {
        this.setState({ status: 'success' });
        await sleep(1000);
        this.setState({ status: 'ready' });
      } else {
        this.setState({ status: 'ready' });
      }
    }
  }


  renderContent = () => {
    if (this.state.status === 'loading') {
      return <Loader minHeight={50} />;
    }

    if (this.state.status === 'success') {
      return <Icon type="badgeCheck" size="2x" className="success" />;
    }

    return <ReactCodeInput onChange={this.handleCode} type="number" fields={4} />;
  }

  render() {
    if (!this.props.phone) { return null; }
    if (this.props.phoneValidated) { return null; }

    return (
      <div className="phone-validation-form">
        <p className="explanation">
          Please verify your phone by entering the 4-digit code we sent. <br />
          {this.state.status === 'ready' ? <ResendValidationLink /> : null}
        </p>
        <div className="code-input">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapState = ({ account }) => ({
  phone: account.contact.phone,
  phoneValidated: account.contact.phoneValidated,
});
const mapDispatch = { checkPhoneCode: accountOperations.checkPhoneCode };
export default connect(mapState, mapDispatch)(PhoneValidationForm);
