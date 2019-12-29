import React from 'react';
import ProductDetailsSection from './ProductDetailsSection/ProductDetailsSection';
import FoodmakerPreview from '../../foodmakers/FoodmakerPreview/FoodmakerPreview';

export default ({ product }) => (
  <ProductDetailsSection title="Meet Your Foodmaker">
    <FoodmakerPreview foodmaker={product ? product.foodmaker : null} />
  </ProductDetailsSection>
);
