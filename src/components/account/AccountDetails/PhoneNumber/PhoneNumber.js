import React from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../../elements';
import PhoneNumberForm from './PhoneNumberForm';
import PhoneValidationForm from './PhoneValidationForm';

class PhoneNumber extends React.Component {
  render() {
    if (!this.props.contact) { return <Loader minHeight={200} />; }

    return (
      <div className="account-form-container">
        <PhoneNumberForm />
        <PhoneValidationForm />
      </div>
    );
  }
}

const mapState = ({ account }) => ({ contact: account.contact });

export default connect(mapState)(PhoneNumber);
