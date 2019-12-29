import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../../ducks/auth';

class CheckAuth extends React.Component {
  render() {
    return this.props.isLoggedIn ? this.props.children[0] : this.props.children[1];
  }
}

const mapState = ({ auth }) => ({
  isLoggedIn: authSelectors.isLoggedIn(auth),
});

export default connect(mapState)(CheckAuth);
