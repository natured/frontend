import React from 'react';
import './productDetails.scss';

export default ({ title, children, color = 'orange', onClick }) => (
  <div className="product-page-section">
    <div>
      <h5 className="product-page--header" onClick={onClick}>{title}</h5>
      <div className="descriptions">
        {children}
      </div>
    </div>
  </div>
);
