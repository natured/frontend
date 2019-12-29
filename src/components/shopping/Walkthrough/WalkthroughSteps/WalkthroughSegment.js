import React from 'react';

export default ({ title, children }) => (
  <div className="descriptions">
    <div className="main-description">{title}</div>
    <div className="subdescription">{children}</div>
  </div>
);
