import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../../elements';

class PhoneLabel extends React.Component {
  badge = () => {
    if (this.props.phoneValidated) {
      return <Icon type="badgeCheck" className="success" />;
    }
  }

  toggle = () => {
    if (!this.props.edit) {
      return <span onClick={this.props.show}>Edit</span>;
    }
  }

  render() {
    return <div>Phone Number &nbsp; {this.badge()} </div>;
  }
}

const mapState = ({ account }) => ({ phoneValidated: account.contact.phoneValidated });
export default connect(mapState)(PhoneLabel);
