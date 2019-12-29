import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Loader } from '../../../elements';
import { authOperations } from '../../../../ducks/auth';
import InvalidTokenNotification from './PasswordResetNotifications/InvalidTokenNotification';

export default (ChildComponent) => {
  class hasPasswordResetToken extends Component {
    constructor(props) {
      super(props);
      this.state = { validated: false };
    }

    componentWillMount() {
      this.checkToken(this.props.match.params.token);
    }

    checkToken = async (token) => {
      const result = await this.props.validateResetToken(token);
      if (!result) {
        toast(InvalidTokenNotification);
        this.props.history.push('/login');
      } else {
        this.setState({ validated: true });
      }
    }

    render() {
      const { token } = this.props.match.params;
      return this.state.validated ? <ChildComponent /> : <Loader />;
    }
  }

  const mapDispatch = { validateResetToken: authOperations.validateResetToken };
  return connect(null, mapDispatch)(hasPasswordResetToken);
};
