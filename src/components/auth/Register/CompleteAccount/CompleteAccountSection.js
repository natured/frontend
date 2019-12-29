import React from 'react';
import { Link } from '../../../elements';
import CompleteAccountForm from './CompleteAccountForm';

export default ({ zip, email }) => (
  <div className="organism--form">
    <h1>Great news! We deliver to {zip}.</h1>
    <p>Let’s finish setting up your account.</p>
    <CompleteAccountForm email={email} zip={zip} />
    <div className="links">
      <div>
        Already have an account? &nbsp;
        <Link to="LOGIN" className="link">Login.</Link>
      </div>
    </div>
  </div>
);
