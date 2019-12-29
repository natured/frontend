import React from 'react';
import { Icon } from '../../elements';
import './foodmakerLocation.scss';

export default ({ foodmaker }) => (
  <div className="foodmaker-location">
    <Icon type="location" size="lg" />
    {foodmaker ? foodmaker.location : null}
  </div>
);
