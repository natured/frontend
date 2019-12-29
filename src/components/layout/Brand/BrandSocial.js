import React from 'react';
import { Icon, Link } from '../../elements';

export default ({ className, iconClassName }) => (
  <div className={className}>
    <Link special="instagram" className={iconClassName}>
      <Icon type="instagram" />
    </Link>
    <Link special="facebook" className={iconClassName}>
      <Icon type="facebook" />
    </Link>
    <Link special="twitter" className={iconClassName}>
      <Icon type="twitter" />
    </Link>
  </div>
);
