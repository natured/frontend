import React from 'react';
import WhenAuth from '../auth/AuthHelpers/WhenAuth';
import SubscriptionContent from './SubscriptionContent/SubscriptionContent';
import './productSubscription.scss';

class ProductSubscrption extends React.Component {
  render() {
    // hide if the product isnt subscribeable
    if (!this.props.product || !this.props.product.subscribe) { return null; }

    return (
      <WhenAuth>
        <div className="product-subscription">
          <SubscriptionContent productId={this.props.product.id} />
        </div>
      </WhenAuth>
    );
  }
}

export default ProductSubscrption;
