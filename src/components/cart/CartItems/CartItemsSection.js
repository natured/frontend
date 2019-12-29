import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../ducks/cart';
import { Segment, Dimmer } from '../../elements';
import CartItemsList from './CartItemsList';
import EmptyCart from '../EmptyCart/EmptyCart';
import './cartItems.scss';

const groupByCategory = (items) => {
  // stores all categories, sorted by priority
  const categories = {};

  // stores items by category
  const itemsByCategory = {};

  items.forEach((item) => {
    // TODO: return to top level category
    const category = item.current.category.top;

    if (!(category.name in categories)) {
      categories[category.name] = category;
    }

    if (category.name in itemsByCategory) {
      itemsByCategory[category.name].push(item);
    } else {
      itemsByCategory[category.name] = [item];
    }
  });

  const keys = Object.keys(categories).sort((a, b) => (
    categories[a].priority - categories[b].priority
  ));

  return keys.map(key => ({
    category: categories[key],
    items: itemsByCategory[key],
  }));
};

class CartItemsSection extends React.Component {
  renderLoader = () => (
    <Dimmer active={!this.props.checkedForCart} />
  )

  renderCart = () => {
    if (!this.props.checkedForCart) { return null; }

    if (!this.props.hasItems) {
      return <EmptyCart />;
    }

    return <CartItemsList categories={groupByCategory(this.props.items.available)} />;
  }

  renderUnavailable = () => {
    if (!this.props.items) { return null; }
    if (this.props.items.unavailable.length > 0) {
      return <div>The following items are no longer available..</div>;
    }
  }

  render() {
    return (
      <Segment className="cart--items--section">
        {this.renderLoader()}
        {this.renderCart()}
        {this.renderUnavailable()}
      </Segment>
    );
  }
}

const mapState = ({ cart }) => ({
  checkedForCart: cartSelectors.checkedForCart(cart),
  hasItems: cartSelectors.hasItems(cart),
  items: cartSelectors.getItems(cart),
});

export default connect(mapState)(CartItemsSection);
