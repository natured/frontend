import React from 'react';
import './order.scss';

export default ({ order }) => (
  <div className="order-status">{order.status}</div>
);
