import React, { Component } from 'react';
import { Link, Image } from '../../elements';
import './productImage.scss';

export default ({ product }) => {
  const to = product ? `PRODUCT:${product.foodmaker.slug},${product.slug}` : null;
  // <Overlay productId={product ? product.id : null} />

  return (
    <Link to={to} className="product-square-image bg-white">
      <Image img={product ? product.img : ''} />
    </Link>
  );
}
