import React from 'react';
import { Link } from '../../elements';
import './emptyCart.scss';

export default ({ login = true }) => {
  if (login) {
    return (
      <div className="cart--empty">
        <div className="cart--empty--text">Your basket is empty.</div>
        <Link to="MARKET" className="button--midnight--large">
          Browse the market
        </Link>
      </div>
    );
  }

  return (
    <div className="cart--logged-out">
      <h3 className="header--3--ish cart--call-to-action">Ready to eat local?</h3>
      <div className="cart--empty--text">You must be logged in to shop.</div>
      <div className="join-or-login">
        <Link to="REGISTER" className="button--highlight--large">
          Create Account
        </Link>
        <span className="or">or</span>
        <Link to="LOGIN" className="button--white--large">
          Login
        </Link>
      </div>
    </div>
  );
};
