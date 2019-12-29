import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';
import LineItem from '../LineItem/LineItem';

class Subtotal extends React.Component {
  render() {
    return (
      <LineItem title="Subtotal">
        {this.props.subtotal}
      </LineItem>
    );
  }
}

const mapState = ({ cart }) => ({
  subtotal: cartSelectors.subtotal(cart),
});

export default connect(mapState)(Subtotal);
