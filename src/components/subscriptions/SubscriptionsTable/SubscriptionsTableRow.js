import React from 'react';
import ProductSquare from '../../products/ProductSquare/ProductSquare';
import SubscriptionIncrements from '../SubscriptionActions/SubscriptionIncrements';
import SubscriptionPeriod from '../SubscriptionActions/SubscriptionPeriod';

export default ({ subscription }) => {
  if (subscription.quantity <= 0) { return null; }

  return (
    <div className="subscription">
      <ProductSquare product={subscription.product} />
      <div className="subscription-actions">
        <SubscriptionIncrements subscription={subscription} />
        <SubscriptionPeriod subscription={subscription} />
      </div>
    </div>
  );
};
