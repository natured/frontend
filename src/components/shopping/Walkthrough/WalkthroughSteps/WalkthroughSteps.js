import React from 'react';

export default ({ canSkip, next, back }) => (
  <div className="walkthrough-steps">
    <a className="text-subdued" onClick={back}>Back</a>
    {canSkip ? <a className="text-subdued" onClick={next}>Skip</a> : null}
  </div>
);
