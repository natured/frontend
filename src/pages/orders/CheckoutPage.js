import React, { Component } from 'react';
import page from '../page';

class CheckoutPage extends Component {
  static head = () => ({ title: 'Checkout' });

  render() {
    return (
      <div className="animated fadeIn">
        Checkout
      </div>
    );
  }
}


export default {
  component: page(CheckoutPage),
};
