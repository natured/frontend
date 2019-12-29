import React from 'react';
import './productPricing.scss';

export default ({ product }) => {
  if (!product) { return null; }
  return <span className="product-size">{product.pricing.sizeDescription}</span>;
};
