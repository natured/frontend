import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getIcon from './getIcon';
import './icon.scss';

export default ({ type, className, spin, size }) => (
  <FontAwesomeIcon
    icon={getIcon(type)}
    className={`${className} ${spin ? 'fa-spin' : ''}`}
    size={size}
  />
);
