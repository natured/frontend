import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../ducks/cart';
import './overlay.scss';

class Overlay extends React.Component {
  render() {
    const inCart = this.props.carted > 0;

    return (
      <div className={`product-carted-overlay ${inCart ? 'carted' : ''}`}>
        {inCart && <div className="num">{this.props.carted}</div>}
        {inCart && <div>in your cart</div>}
      </div>
    );
  }
}

const mapState = ({ cart }, { productId }) => ({
  carted: productId ? cartSelectors.getCartedQuantity(cart, productId) : 0,
});


export default connect(mapState)(Overlay);
