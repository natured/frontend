import React from 'react';
import { Link } from 'react-router-dom';
import StartAccountForm from './StartAccountForm';

export default ({ updateRegistration }) => (
  <div className="organism--form">
    <h1>Join Natured</h1>
    <p>Sign up for the best groceries from local food makers.</p>
    <StartAccountForm updateRegistration={updateRegistration} />
    <div className="links">
      <div>
        Already have an account? &nbsp;
        <Link to="/login" className="link">Login.</Link>
      </div>
    </div>
  </div>
);
