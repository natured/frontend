import React from 'react';
import './error.scss';

export default ({ hasError, error }) => {
  // If there is no error, don't show anything
  if (!hasError) { return null; }

  // Otherwise, return the error
  return <div className="error">{error}</div>;
};
