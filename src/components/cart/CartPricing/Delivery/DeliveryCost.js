import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';
import LineItem from '../LineItem/LineItem';

class DeliveryCost extends React.Component {
  render() {
    return (
      <LineItem title="Delivery">
        {this.props.delivery}
      </LineItem>
    );
  }
}

const mapState = ({ cart }) => ({
  delivery: cartSelectors.delivery(cart),
});

export default connect(mapState)(DeliveryCost);
