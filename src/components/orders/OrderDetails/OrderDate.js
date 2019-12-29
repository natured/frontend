import React from 'react';
import moment from 'moment';
import './order.scss';

export default ({ order, className = 'order-date', format = 'llll' }) => (
  <div className={className}>
    {moment(order.timeslot.deliveryStart).format(format)}
  </div>
);
