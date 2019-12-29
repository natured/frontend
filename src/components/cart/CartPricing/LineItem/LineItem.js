import React from 'react';
import './lineItem.scss';

export default ({ title, children, sub = null, className = '' }) => {
  if (!children) { return null; }

  return (
    <div className={`cart--pricing--item ${className}`}>
      <div className="cart--pricing--title">
        {title}
        {sub}
      </div>
      <div className="cart--pricing--amount">{children}</div>
    </div>
  );
};
