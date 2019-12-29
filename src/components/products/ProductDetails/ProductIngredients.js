import React from 'react';
import renderHTML from 'react-render-html';
import ProductDetailsSection from './ProductDetailsSection/ProductDetailsSection';

export default ({ product }) => {
  if (!product || !product.more || !product.more.ingredients) { return null; }

  return (
    <ProductDetailsSection title="Ingredients">
      {renderHTML(product.more.ingredients) }
    </ProductDetailsSection>
  );
};
