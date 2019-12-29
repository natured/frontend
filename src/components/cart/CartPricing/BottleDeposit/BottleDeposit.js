import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';
import LineItem from '../LineItem/LineItem';

class BottleDeposit extends React.Component {
  render() {
    return (
      <LineItem title="Bottle Deposit">
        {this.props.bottles}
      </LineItem>
    );
  }
}

const mapState = ({ cart }) => ({
  bottles: cartSelectors.bottles(cart),
});

export default connect(mapState)(BottleDeposit);
