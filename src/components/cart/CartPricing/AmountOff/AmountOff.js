import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';
import LineItem from '../LineItem/LineItem';

class AmountOff extends React.Component {
  render() {
    if (!this.props.amountOff) { return null; }

    return (
      <LineItem title="Discount" className="success">
        {this.props.amountOff}
      </LineItem>
    );
  }
}

const mapState = ({ cart }) => ({
  amountOff: cartSelectors.amountOff(cart),
});

export default connect(mapState)(AmountOff);
