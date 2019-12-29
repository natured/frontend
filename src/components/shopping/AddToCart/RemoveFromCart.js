import React from 'react';
import { connect } from 'react-redux';
import { cartOperations } from '../../../ducks/cart';
import './addToCart.scss';

class RemoveFromCart extends React.Component {
  remove = () => {
    if (this.props.updating) { this.props.updating(); }
    this.props.addToCart(this.props.productId, 0);
  }

  componentWillUnmount() {
    if (this.props.done) { this.props.done(); }
  }

  render() {
    return (
      <div onClick={this.remove} className="remove-from-cart">Remove</div>
    );
  }
}

const mapDispatch = { addToCart: cartOperations.addToCart };
export default connect(null, mapDispatch)(RemoveFromCart);
