import React from 'react';
import ProductPrice from './ProductPrice';
import ProductSize from './ProductSize';

export default ({ product }) => {
  if (!product) { return null; }

  return (
    <div className="product-tile-pricing">
      <ProductSize product={product} />
      <ProductPrice product={product} dollarSign />
    </div>
  );
};
