import React from 'react';

const SayHello = ({ time }) => {
  if (time > 15) { return 'Good evening! '; }
  if (time > 12) { return 'Good afternoon! '; }
  if (time > 5) { return 'Good morning! '; }
  return 'Hey there night owl!';
};

export default ({ text }) => (
  <span><SayHello time={new Date().getHours()} /> {text}</span>
);
