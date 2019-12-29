import React from 'react';
import renderHTML from 'react-render-html';
import ProductDetailsSection from './ProductDetailsSection/ProductDetailsSection';

export default ({ product }) => {
  if (!product || !product.more || !product.more.storage) { return null; }

  return (
    <ProductDetailsSection title="How to Store">
      {renderHTML(product.more.storage) }
    </ProductDetailsSection>
  );
};
