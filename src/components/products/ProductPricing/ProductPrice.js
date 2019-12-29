import React from 'react';
import './productPricing.scss';

const DollarSign = ({ dollarSign }) => (
  dollarSign ? <span className="dollar-sign">$</span> : null
);

const Price = ({ pricing }) => (
  (pricing.price / 100).toFixed(2)
);

const Unit = ({ pricing }) => (
  pricing.byWeight ? <span>/{pricing.unit}</span> : ''
);

export default ({ product, dollarSign }) => (
  product ? (
    <div className="price">
      <DollarSign dollarSign={dollarSign} />
      <Price pricing={product.pricing} />
      <Unit pricing={product.pricing} />
    </div>
  ) : null
);
