import React from 'react';
import { Segment } from 'semantic-ui-react';
import './segment.scss';

export default ({ className = '', children }) => (
  <Segment className={className}>
    {children}
  </Segment>
);
