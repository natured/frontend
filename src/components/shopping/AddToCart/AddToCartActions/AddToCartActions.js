import React from 'react';
import AddToCartButton from './AddToCartButton';
import AddToCartDropdown from './AddToCartDropdown';

class AddToCartActions extends React.Component {
  componentWillMount() {
    this.setState({ max: this.props.available + this.props.carted });
  }

  componentWillUpdate({ available }) {
    // when availability changes, update the max
    if (this.props.available !== available) {
      this.setState({ max: this.props.carted + available });
    }
  }

  render() {
    if (this.props.carted > 0) {
      const dropdown = <AddToCartDropdown {...this.props} max={this.state.max} />;
      if (!this.props.showBasket) { return dropdown; }

      return (
        <div className="dropdown-container">
          {dropdown} <div className="add-to-cart add">in your basket</div>
        </div>
      );
    }

    return (
      <AddToCartButton addToCart={this.props.addToCart} max={this.state.max}>
        {this.props.children}
      </AddToCartButton>
    );
  }
}

export default AddToCartActions;
