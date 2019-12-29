import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';

class ProgressStatus extends Component {
  deliveryFree = () => (
    <span>Woohoo! You’ve unlocked FREE delivery.</span>
  );

  deliveryCosts = () => (
    <span>You’re <b>{this.props.away}</b> away from FREE delivery!</span>
  );

  render() {
    if (!this.props.cart) { return null; }

    return (
      <div className="cart-delivery-remaining">
        {this.props.isFree ? this.deliveryFree() : this.deliveryCosts()}
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart: cart.cart,
  isFree: cartSelectors.hasFreeDelivery(cart),
  away: cartSelectors.fromFreeDelivery(cart),
});

export default connect(mapStateToProps)(ProgressStatus);
