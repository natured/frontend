import React from 'react';
import NewsletterForm from './NewsletterForm';

export default ({ zip, back }) => (
  <div className="zip-check">
    <div>
      <h1 className="header--3">
        Sorry! <br /> We don’t deliver there.
      </h1>
      <p className="para--16">
        We hope to be there soon. Get notified when we start delivering in your area.
      </p>
    </div>
    <NewsletterForm zip={zip} />
    <div className="links" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <span />
      <div>
        Not in {zip}? &nbsp;
        <a className="link" onClick={back}>Check another zip.</a>
      </div>
    </div>
  </div>
);
