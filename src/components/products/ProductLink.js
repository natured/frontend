import React from 'react';
import { Link } from '../elements';

export default ({ product, children, className = '' }) => (
  <Link to={`PRODUCT:${product.foodmaker.slug},${product.slug}`} className={className}>
    {children || product.name}
  </Link>
);
