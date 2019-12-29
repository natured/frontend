import React from 'react';
import Icon from '../Icon/Icon';
import './loader.scss';

export default ({ minHeight }) => (
  <div className={`${!minHeight ? 'full-height' : ''} loader`} style={{ minHeight }}>
    <Icon spin type="spinner" size="lg" />
  </div>
);
