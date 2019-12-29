import React from 'react';
import { Image } from '../../elements';

export default ({ name, slug, options = { square: true, size: 600, q: 10 } }) => (
  <Image
    img={`category-${slug}`}
    alt={`shop by ${name}`}
    options={options}
  />
);
