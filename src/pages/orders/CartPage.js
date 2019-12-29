import React, { Component } from 'react';
import { StickyContainer } from 'react-sticky';
// import { PageView } from '../../../services/Analytics';
import CartLayout from '../../components/cart/CartLayout/CartLayout';
import page from '../page';

class CartPage extends Component {
  static head = () => ({ title: 'Your Cart' });

  render() {
    return (
      <StickyContainer>
        <div className="container--outer animated fadeIn">
          <CartLayout />
        </div>
      </StickyContainer>
    );
  }
}

export default {
  component: page(CartPage),
};
