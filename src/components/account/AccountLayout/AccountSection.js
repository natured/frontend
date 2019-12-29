import React from 'react';

export default ({ title, children }) => (
  <div className="account-section">
    <h2 className="header--6--ish">{title}</h2>
    {children}
  </div>
);
