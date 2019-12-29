import React from 'react';
import { Icon, Link } from '../../../elements';
import CheckAuth from '../../../auth/AuthHelpers/CheckAuth';
import ShoppingFor from '../../../shopping/ShoppingFor/ShoppingFor';

const Dropdown = ({ to, children }) => (
  <Link to={to} className="dropdown--link">{children}</Link>
);

const StaticLinks = ({ loaded }) => {
  if (loaded) {
    return (
      <CheckAuth>
        <span className="nav--link">
          <Link to="INVITE" className="nav--link">
            <Icon type="gift" /> &nbsp; Share Local Food, Get $5
          </Link>
        </span>
        <span className="nav--link">
          <Link to="ABOUT_US" className="nav--link">About Us</Link>
          <Link to="FAQ" className="nav--link">FAQs</Link>
        </span>
      </CheckAuth>
    );
  }
  return null;
};

const AuthLinks = ({ loaded }) => {
  if (!loaded) { return null; }

  return [
    <CheckAuth key="auth">
      <div className="nav--link">
        <div className="nav--link with--dropdown">
          <Link to="ACCOUNT" className="nav--link">My Account</Link>
          <div className="nav--dropdown">
            <Dropdown to="ACCOUNT_DETAILS">Details</Dropdown>
            <Dropdown to="ACCOUNT_SUBSCRIPTIONS">Subscriptions</Dropdown>
            <Dropdown to="ACCOUNT_NOTIFICATIONS">Notifications</Dropdown>
            <Dropdown to="ACCOUNT_PAYMENT">Payment</Dropdown>
            <Dropdown to="LOGOUT">Logout</Dropdown>
          </div>
        </div>
        <div style={{ color: '#777' }}>|</div>
      </div>

      <div className="nav--link">
        <Link to="REGISTER" className="nav--link register">
          <span>Create Account</span>
        </Link>
        <Link to="LOGIN" className="nav--link">Login</Link>
        <div style={{ color: '#777', paddingLeft: '1rem' }}>|</div>
      </div>
    </CheckAuth>,
    <a key="shopping" className="nav--link special">
      <ShoppingFor />
    </a>,
  ];
};

export default ({ loaded }) => (
  <div className="nav--skinny">
    <div className="container--outer">
      <div className="nav--split">
        <div className="nav--left animated fadeIn">
          <StaticLinks loaded={loaded} />
        </div>
        <div className="nav--right animated fadeIn" style={{ zIndex: '201' }}>
          <AuthLinks loaded={loaded} />
        </div>
      </div>
    </div>
  </div>
);
