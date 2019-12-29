import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Loader } from '../../elements';
import { authSelectors } from '../../../ducks/auth';

export default (ChildComponent, redirect = true) => {
  class RequireAuth extends Component {
    render() {
      if (!this.props.checkedForUser) { return <Loader />; }
      if (this.props.isLoggedIn) { return <ChildComponent {...this.props} />; }
      return redirect ? <Redirect to="/login" /> : null;
    }
  }

  const mapState = ({ auth }) => ({
    isLoggedIn: authSelectors.isLoggedIn(auth),
    checkedForUser: authSelectors.checkedForUser(auth),
  });

  return connect(mapState)(RequireAuth);
};
