import React from 'react';
import renderHTML from 'react-render-html';
import ProductDetailsSection from './ProductDetailsSection/ProductDetailsSection';

export default ({ product }) => {
  if (!product || !product.more || !product.more.general) { return null; }

  return (
    <ProductDetailsSection title="General">
      {renderHTML(product.more.general) }
    </ProductDetailsSection>
  );
};
