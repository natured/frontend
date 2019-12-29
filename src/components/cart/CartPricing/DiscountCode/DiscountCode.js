import React, { Component } from 'react';
import DiscountCodeForm from './DiscountCodeForm';
import './discountCode.scss';

class DiscountCode extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  show = () => {
    this.setState({ show: true });
  }

  hide = () => {
    this.setState({ show: false });
  }

  link = () => (
    <a onClick={this.show} className="add-code">Add gift card or promo code</a>
  )

  form = () => (
    <DiscountCodeForm hide={this.hide} />
  )

  render() {
    return (
      <div className={`discount-code-form ${this.state.show ? 'show' : ''}`}>
        {this.state.show ? this.form() : this.link()}
      </div>
    );
  }
}

export default DiscountCode;
