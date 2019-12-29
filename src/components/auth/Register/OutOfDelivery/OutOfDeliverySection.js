import React from 'react';

export default ({ zip, back }) => (
  <div className="organism--form">
    <h1>Don’t cry...</h1>
    <p>
      We didn’t spill the milk, we just don’t deliver to your area yet.
      We hope to be there soon!
    </p>
    <div className="links">
      <span />
      <div>
        Not in {zip}? &nbsp;
        <a href="#" className="link" onClick={back}>Check another zip.</a>
      </div>
    </div>
  </div>
);
