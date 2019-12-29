import React from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../../elements';
import DeliveryForm from './DeliveryForm';

class Delivery extends React.Component {
  render() {
    if (!this.props.contact) { return <Loader minHeight={200} />; }

    return (
      <div className="account-form-container">
        <DeliveryForm done={this.props.done} delivery={this.props.contact.delivery} />
      </div>
    );
  }
}

const mapState = ({ account }) => ({ contact: account.contact });
export default connect(mapState)(Delivery);
