import React, { Component } from 'react';
import ProductTile from '../ProductTile/ProductTile';

class ProductsList extends Component {
  render() {
    const list = this.props.products || Array(this.props.length).fill(null);

    return (
      <div className="product--list">
        {list.map((product, key) => (
          <ProductTile key={key} product={product} /> // eslint-disable-line
        ))}
      </div>
    );
  }
}

export default ProductsList;
