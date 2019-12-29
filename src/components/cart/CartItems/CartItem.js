import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Dimmer } from '../../elements';
import ProductLink from '../../products/ProductLink';
import FoodmakerLink from '../../foodmakers/FoodmakerLink';
import CartItemImage from './CartItemImage';
import AddToCartOptions from '../../shopping/AddToCart/AddToCartOptions/AddToCartOptions';
import RemoveFromCart from '../../shopping/AddToCart/RemoveFromCart';

class CartItem extends React.Component {
  state = { loading: false };

  loader = () => (
    <Dimmer active={this.state.loading} />
  )

  updating = () => {
    this.setState({ loading: true });
  }

  done = () => {
    this.setState({ loading: false });
  }

  render() {
    const { product, pricing, quantity } = this.props.item;
    if (quantity <= 0) { return null; }

    return (
      <Segment className="cart--item">
        {this.loader()}
        <CartItemImage product={product} />
        <div className="cart--item--details">
          <ProductLink product={product} className="cart--item--product">
            {product.name}{pricing.tax ? '*' : ''}
          </ProductLink>
          <FoodmakerLink
            foodmaker={product.foodmaker}
            className="cart--item--foodmaker"
          />
          <div className="cart--item--description">
            {pricing.sizeDescription}
            &nbsp; &middot; &nbsp;
            {pricing.display}
          </div>
        </div>
        <div className="cart--item--quantity">
          <div className="cart--item--price">
            ${(pricing.totalPrice / 100).toFixed(2)}
          </div>
          <AddToCartOptions product={product} />
          <RemoveFromCart
            productId={product.id}
            updating={this.updating}
            done={this.done}
          />
        </div>
      </Segment>
    );
  }
}

export default CartItem;
