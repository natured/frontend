import React from 'react';
import './productAlert.scss';

class ProductAlert extends React.Component {
  render() {
    if (!this.props.product || this.props.product.show) { return null; }

    return (
      <div className="product-alert-banner">
        This item is currently unavailable from our producers.
      </div>
    );
  }
}

export default ProductAlert;
