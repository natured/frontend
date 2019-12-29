import React from 'react';
import { Image } from '../../elements';

export default ({ product }) => (
  <div className="product-image bg-gray">
    <Image img={product ? product.img : ''} />
  </div>
);
