import React from 'react';
import { Image } from '../../elements';

export default ({ foodmaker, className, options }) => (
  <div className={className}>
    <Image img={foodmaker.img} options={options} />
  </div>
);
