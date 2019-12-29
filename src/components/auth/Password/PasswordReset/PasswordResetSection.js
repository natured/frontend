import React from 'react';
import PasswordResetForm from './PasswordResetForm';

export default ({ token }) => (
  <div className="organism--form">
    <h1>Reset your password.</h1>
    <p>Create a brand new password for your account.</p>
    <PasswordResetForm token={token} />
  </div>
);
