import React from 'react';
import './faq.scss';

export default ({ title, children }) => (
  <div className="faq--section">
    <div className="header--5--ish">{title}</div>
    {children}
  </div>
);
