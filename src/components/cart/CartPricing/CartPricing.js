import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Segment } from '../../elements';
import Subtotal from './Subtotal/Subtotal';
import AmountOff from './AmountOff/AmountOff';
import DeliveryCost from './Delivery/DeliveryCost';
import BottleDeposit from './BottleDeposit/BottleDeposit';
import Credits from './Credits/Credits';
import AppliedDiscountCode from './DiscountCode/AppliedDiscountCode';
import SalesTax from './SalesTax/SalesTax';
import DiscountCode from './DiscountCode/DiscountCode';
import Total from './Total/Total';
import './cartPricing.scss';


class CartPricing extends React.Component {
  loading = () => <Dimmer active={!this.props.cart || this.props.loading} />;

  render() {
    return (
      <Segment className="cart--pricing">
        {this.loading()}
        <Subtotal />
        <AmountOff />
        <DeliveryCost />
        <BottleDeposit />
        <Credits />
        <AppliedDiscountCode />
        <SalesTax />
        <DiscountCode />
        <Total />
      </Segment>
    );
  }
}

const mapState = ({ cart }) => ({
  cart: cart.cart,
  loading: cart.loading,
});

export default connect(mapState)(CartPricing);
