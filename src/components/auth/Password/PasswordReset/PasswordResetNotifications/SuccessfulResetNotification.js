import React from 'react';
import { Notification } from '../../../../elements';

export default () => (
  <Notification type="success">
    <div className="title">Success!</div>
    <div className="content">Your password has been reset.</div>
  </Notification>
);
