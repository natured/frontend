import React, { Component } from 'react';
import page from '../page';

class OrderPage extends Component {
  static head = ({ order }) => ({
    title: order ? `Order #${order.referenceId}` : 'Your Order',
  });

  render() {
    return (
      <div className="animated fadeIn">
        Order
      </div>
    );
  }
}


export default {
  component: page(OrderPage),
};
