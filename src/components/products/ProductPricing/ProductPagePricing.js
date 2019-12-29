import React from 'react';
import ProductPrice from './ProductPrice';
import ProductSize from './ProductSize';
import './productPricing.scss';

export default ({ product }) => (
  <div className="product-page-pricing">
    <ProductPrice product={product} dollarSign />
    <ProductSize product={product} />
  </div>
);
