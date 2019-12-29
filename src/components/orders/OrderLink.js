import React from 'react';
import { Link } from '../elements';

export default ({ order, children, className = '' }) => (
  <Link to={`ORDER:${order.id}`} className={`order-link ${className}`}>
    {children || (order.referenceId ? `#${order.referenceId}` : 'View Order')}
  </Link>
);
