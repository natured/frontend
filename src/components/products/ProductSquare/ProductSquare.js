import React from 'react';
import ProductImage from '../ProductImages/ProductImage';
import ProductAndFoodmakerNames from '../ProductAndFoodmakerNames/ProductAndFoodmakerNames';
import './productSquare.scss';

// used in cart and in tables where product detials are needed
export default ({ product }) => (
  <div className="product-grid-display">
    <ProductImage product={product} className="product-image" options={{ square: true, size: 100 }} />
    <div>
      <ProductAndFoodmakerNames product={product} />
      <div className="product-description">
        {product.pricing.sizeDescription}
      </div>
    </div>
  </div>
);
