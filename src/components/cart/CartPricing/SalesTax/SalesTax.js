import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';
import LineItem from '../LineItem/LineItem';

class SalesTax extends React.Component {
  render() {
    return (
      <LineItem title="Estimated Tax*">
        {this.props.tax}
      </LineItem>
    );
  }
}

const mapState = ({ cart }) => ({
  tax: cartSelectors.tax(cart),
});

export default connect(mapState)(SalesTax);
