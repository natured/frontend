import React from 'react';
import SendResetForm from './SendResetForm';

export default ({ email, updateEmail, hide }) => (
  <div className="organism--form">
    <h1>Forgot your password?</h1>
    <p>We can help get it back.</p>
    <SendResetForm hide={hide} email={email} updateEmail={updateEmail} />
    <div className="links">
      <a className="link" onClick={hide}>Cancel</a>
    </div>
  </div>
);
