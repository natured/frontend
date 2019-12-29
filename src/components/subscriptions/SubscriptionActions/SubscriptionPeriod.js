import React from 'react';

const Period = ({ period }) => {
  if (period === 1) { return 'week'; }
  return `${period} weeks`;
};

export default ({ subscription: { period, timeslotSetting } }) => (
  <div className="subscription-period">
    Every <Period period={period} /> on {timeslotSetting.day}
  </div>
);
