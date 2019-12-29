import React from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../../elements';
import NameForm from './NameForm';

class ContactInfo extends React.Component {
  render() {
    if (!this.props.contact) { return <Loader minHeight={200} />; }

    return (
      <div className="account-form-container">
        <NameForm first={this.props.contact.first} last={this.props.contact.last} />
      </div>
    );
  }
}

const mapState = ({ account }) => ({ contact: account.contact });
export default connect(mapState)(ContactInfo);
