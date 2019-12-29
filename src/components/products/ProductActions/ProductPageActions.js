import React from 'react';
import AddToCart from '../../shopping/AddToCart/AddToCart';
import './productPageActions.scss';

export default ({ product }) => {
  if (!product) { return null; }

  const props = { productId: product.id, productName: product.name, product };
  return (
    <div className="product-actions product-page-actions">
      <AddToCart {...props} showBasket showRemove>Add to Basket</AddToCart>
    </div>
  );
};
