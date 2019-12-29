import React from 'react';
import { Notification } from '../../elements';

export default () => (
  <Notification type="success">
    <div className="title">You’ve activated $10 off!</div>
    <div className="content">
      It will automatically be applied to your cart on your first order.
    </div>
  </Notification>
);
