import React from 'react';
import './order.scss';

export default ({ order }) => (
  <div className="order-reference">
    {order.referenceId ? `#${order.referenceId}` : 'View Order'}
  </div>
);
