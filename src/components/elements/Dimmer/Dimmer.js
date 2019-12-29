import React from 'react';
import { Dimmer } from 'semantic-ui-react';
import Icon from '../Icon/Icon';
import './dimmer.scss';

export default ({ active = false, showIcon = true }) => (
  <Dimmer active={active} inverted>
    {showIcon && <Icon type="loader" className="loading-icon" />}
  </Dimmer>
);
