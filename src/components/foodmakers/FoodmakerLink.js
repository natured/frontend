import React from 'react';
import { Link } from '../elements';

export default ({ foodmaker, children, className = '' }) => (
  <Link to={`FOODMAKER:${foodmaker.slug}`} className={className}>
    {children || foodmaker.name}
  </Link>
);
