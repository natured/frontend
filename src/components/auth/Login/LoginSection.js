import React from 'react';
import LoginForm from './LoginForm';
import { Link, Greeting } from '../../elements';

export default ({ email, updateEmail, show }) => (
  <div className="organism--form">
    <h1><Greeting /></h1>
    <p>Welcome back. Login to your account.</p>
    <LoginForm email={email} updateEmail={updateEmail} />
    <div className="links">
      <a className="link" onClick={show}>Forgot your password?</a>
      <div>
        Don’t have an account? &nbsp;
        <Link to="REGISTER" className="link">Create one.</Link>
      </div>
    </div>
  </div>
);
