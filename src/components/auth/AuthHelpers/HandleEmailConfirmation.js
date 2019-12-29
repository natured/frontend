import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as qs from 'query-string';
import { toast } from 'react-toastify';
import { Notification } from '../../elements';
import { accountOperations } from '../../../ducks/account';

// http://localhost:8000/login?yWhpbRfMtnSvZ6MXyc7dFwR7IQP3WTgGCYcD40e1
// http://localhost:8000/login?emailConfirmationToken=yWhpbRfMtnSvZ6MXyc7dFwR7IQP3WTgGCYcD40e1

const SuccessNotification = () => (
  <Notification type="success">
    <div className="title">Hey! You’re all set.</div>
    <div className="content">We confirmed your email.</div>
  </Notification>
);

const FailureNotification = () => (
  <Notification type="error">
    <div className="title">Hm, there was an error.</div>
    <div className="content">We were unable to confirm your email.</div>
  </Notification>
);

export default (ChildComponent) => {
  class handleEmailConfirmation extends Component {
    componentWillMount() {
      const { search } = this.props.location;
      if (search) {
        // Checks for both old and new formats of tokens
        const params = qs.parse(search, { ignoreQueryPrefix: true });
        if (params.emailConfirmationToken) {
          this.confirm(params.emailConfirmationToken);
        }
      }
    }

    confirm = async (token) => {
      const { success } = await this.props.confirmEmail(token);
      toast(success ? <SuccessNotification /> : <FailureNotification />);
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapDispatch = { confirmEmail: accountOperations.confirmEmail };
  return connect(null, mapDispatch)(withRouter(handleEmailConfirmation));
};
