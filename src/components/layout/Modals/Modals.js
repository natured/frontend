import React from 'react';
import { connect } from 'react-redux';
import { accountSelectors } from '../../../ducks/account';
import WalkthroughModal from './Modals/WalkthroughModal';

class Modals extends React.Component {
  renderWalkthrough = () => {
    if (this.props.showWalkthrough) {
      return <WalkthroughModal />;
    }
  }

  render() {
    return (
      <div className="modal-container">
        {this.renderWalkthrough()}
      </div>
    );
  }
}

const mapState = ({ account }) => ({
  showWalkthrough: accountSelectors.showWalkthrough(account),
});

export default connect(mapState)(Modals);
