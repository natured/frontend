import React from 'react';
import { connect } from 'react-redux';
import { shoppingSelectors } from '../../../../ducks/shopping';
import { cartSelectors, cartOperations } from '../../../../ducks/cart';
import { availabilitySelectors, availabilityOperations } from '../../../../ducks/availability';
import EmptyButton from './EmptyButton';
import UnavailableButton from './UnavailableButton';
import WalkthroughButton from './WalkthroughButton';
import AddToCartActions from '../AddToCartActions/AddToCartActions';

class AddToCartOptions extends React.Component {
  componentWillMount() {
    if (this.props.available === 'invalid') {
      this.props.getProductAvailability(this.props.product.id);
    }
  }

  addToCart = async (qty) => {
    await this.props.addToCart(this.props.product.id, qty);
    return true;
  }

  renderButton = () => {
    if (this.props.available === 'invalid') {
      return <EmptyButton />;
    }

    if (this.props.available <= 0 && this.props.carted === 0) {
      return <UnavailableButton />;
    }

    if (this.props.showWalkthrough) {
      return (
        <WalkthroughButton product={this.props.product} addToCart={this.addToCart}>
          {this.props.children}
        </WalkthroughButton>
      );
    }

    return (
      <AddToCartActions
        showRemove={this.props.showRemove}
        showBasket={this.props.showBasket}
        carted={this.props.carted}
        available={this.props.available}
        addToCart={this.addToCart}
      >
        {this.props.children}
      </AddToCartActions>
    );
  }

  render() {
    return <div className="animated fadeIn">{this.renderButton()}</div>;
  }
}

const mapState = ({ shopping, cart, availability }, { product }) => ({
  carted: cartSelectors.getCartedQuantity(cart, product.id),
  available: availabilitySelectors.getProductAvailability(
    availability, product.id, shoppingSelectors.getTimeslotId(shopping),
  ),
});

const mapDispatch = {
  addToCart: cartOperations.addToCart,
  getProductAvailability: availabilityOperations.getProductAvailability,
};

export default connect(mapState, mapDispatch)(AddToCartOptions);
