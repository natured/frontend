import React from 'react';
import renderHTML from 'react-render-html';
import ProductDetailsSection from './ProductDetailsSection/ProductDetailsSection';

const Loader = () => (
  <div>Loading...</div>
);

export default ({ product }) => (
  <ProductDetailsSection title="About This Item">
    {product ? renderHTML(product.description) : <Loader />}
  </ProductDetailsSection>
);
