import React from 'react';
import Icon from '../Icon/Icon';
import './notification.scss';

export default ({ type = 'default', children }) => (
  <div className="notification">
    <div className={`icon ${type}`}>
      <Icon type={type} />
    </div>
    <div>{children}</div>
    <div className="close-toast">
      <Icon type="close" />
    </div>
  </div>
);
