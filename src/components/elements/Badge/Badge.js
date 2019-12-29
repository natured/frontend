import React from 'react';
import './badge.scss';

export default ({ children, count }) => (
  <div className="badge-wrapper">
    {children}
    {count > 0 && <div className="badge">{count}</div>}
  </div>
);
