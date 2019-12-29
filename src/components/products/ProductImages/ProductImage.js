import React from 'react';
import { Image } from '../../elements';

export default ({ product, className, options }) => (
  <div className={className}>
    <Image img={product.img} options={options} />
  </div>
);
