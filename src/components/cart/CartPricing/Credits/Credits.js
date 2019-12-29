import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';
import LineItem from '../LineItem/LineItem';

class Credits extends React.Component {
  remaining = () => (
    <div className="cart--pricing--subdued">
      ({this.props.remaining || '$0'} remaining)
    </div>
  )

  render() {
    if (!this.props.appliedCredit) { return null; } // dont show if credit not applied

    return (
      <LineItem title="Credits" sub={this.remaining()}>
        - {this.props.appliedCredit}
      </LineItem>
    );
  }
}

const mapState = ({ cart }) => ({
  appliedCredit: cartSelectors.appliedCredit(cart),
  remainingCredit: cartSelectors.creditRemaining(cart),
});

export default connect(mapState)(Credits);
