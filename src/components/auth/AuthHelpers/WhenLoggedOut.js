import React from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../elements';
import { authSelectors } from '../../../ducks/auth';

/**
 * Outputs children when authenticated
 */
class WhenLoggedOut extends React.Component {
  render() {
    if (!this.props.checkedForUser) { return <Loader />; }
    return this.props.isLoggedIn ? null : this.props.children;
  }
}

const mapState = ({ auth }) => ({
  checkedForUser: authSelectors.checkedForUser(auth),
  isLoggedIn: authSelectors.isLoggedIn(auth),
});

export default connect(mapState)(WhenLoggedOut);
