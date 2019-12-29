import React from 'react';
import ProductDescription from '../ProductDetails/ProductDescription';
import ProductGeneral from '../ProductDetails/ProductGeneral';
import ProductIngredients from '../ProductDetails/ProductIngredients';
import ProductStorage from '../ProductDetails/ProductStorage';
import ProductNutritionalLabel from '../ProductDetails/ProductNutritionalLabel';
import ProductAddBySection from '../ProductAddBy/ProductAddBySection';
import './productPageBottom.scss';

export default ({ product }) => (
  <div className="bottom-section">
    <div className="beneath-left">
      <ProductDescription product={product} />
    </div>
    <div className="beneath-right">
      <ProductAddBySection product={product} />
      <ProductGeneral product={product} />
      <ProductIngredients product={product} />
      <ProductStorage product={product} />
      <ProductNutritionalLabel product={product} />
    </div>
  </div>
);
