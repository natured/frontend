import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accountOperations } from '../../../../ducks/account';

export default (ChildComponent) => {
  class accountNotifications extends Component {
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapState = ({ account }) => ({
    notifications: account.notifications || null,
  });

  const mapDispatch = { updateToggle: accountOperations.toggleNotification };
  return connect(mapState, mapDispatch)(accountNotifications);
};
