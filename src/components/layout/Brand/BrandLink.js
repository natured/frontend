import React from 'react';
import { Link } from 'react-router-dom';
import './brand.scss';

export default ({ className = '' }) => (
  <Link to="/boston/market" className={className}>
    <h5 className="natured-brand">Natured</h5>
  </Link>
);
