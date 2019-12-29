import React from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../../elements';
import EmailAddressForm from './EmailAddressForm';

class EmailAddress extends React.Component {
  render() {
    if (!this.props.contact) { return <Loader minHeight={200} />; }

    const { email, emailValidated } = this.props.contact;
    return (
      <div className="account-form-container">
        <EmailAddressForm email={email} emailValidated={emailValidated} />
      </div>
    );
  }
}

const mapState = ({ account }) => ({ contact: account.contact });
export default connect(mapState)(EmailAddress);
