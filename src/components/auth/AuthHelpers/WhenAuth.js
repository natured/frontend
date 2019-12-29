import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../../ducks/auth';

/**
 * Outputs children when authenticated
 */
class WhenAuth extends React.Component {
  render() {
    return this.props.isLoggedIn ? this.props.children : null;
  }
}

const mapState = ({ auth }) => ({
  isLoggedIn: authSelectors.isLoggedIn(auth),
});

export default connect(mapState)(WhenAuth);
