import React, { Component } from 'react';
import { Link, Image } from '../../elements';
import Overlay from '../../shopping/Overlay/Overlay';
import './productImage.scss';

export default ({ product }) => {
  const to = product ? `PRODUCT:${product.foodmaker.slug},${product.slug}` : null;

  return (
    <Link to={to} className="product-square-image bg-white">
      <Overlay productId={product ? product.id : null} />
      <Image img={product ? product.img : ''} />
    </Link>
  );
}
