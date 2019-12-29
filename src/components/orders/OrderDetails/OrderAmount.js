import React from 'react';
import './order.scss';

const Price = ({ price }) => (`$${(price / 100).toFixed(2)}`);

export default ({ order: { finalPricing, initialPricing } }) => (
  <div className="order-amount">
    <Price price={finalPricing ? finalPricing.total : initialPricing.total} />
  </div>
);
