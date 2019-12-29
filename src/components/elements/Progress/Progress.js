import React from 'react';
import './progress.scss';

export default ({ color, width }) => (
  <div className={`progress--holder--${color}`}>
    <div className="progress--bar" style={{ width }} />
  </div>
);
