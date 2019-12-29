import React from 'react';
import { Notification } from '../../../../elements';

export default () => (
  <Notification type="error">
    <div className="title">There was an error.</div>
    <div className="content">
      Your link may have expired or was already used.  Try requesting another.
    </div>
  </Notification>
);
