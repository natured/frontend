import React from 'react';
import ProductList from '../ProductList';

export default ({ title, products }) => {
  if (products.length === 0) { return null; }

  return (
    <div className="category--section">
      <h1 className="header--4--ish">{title}</h1>
      <ProductList products={products} length={products.length} />
    </div>
  );
};
