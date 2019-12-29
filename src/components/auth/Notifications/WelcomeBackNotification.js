import React from 'react';
import { Notification } from '../../elements';

export default ({ name }) => (
  <Notification type="success">
    <div className="title">Welcome back, {name}!</div>
  </Notification>
);
