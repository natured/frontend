import React from 'react';

export default ({ children, width = 50 }) => (
  <div className="split-input">
    <div className="split" style={{ width: `${width}%` }}>
      {children[0]}
    </div>
    <div className="split" style={{ width: `${100 - width}%` }}>
      {children[1]}
    </div>
  </div>
);
