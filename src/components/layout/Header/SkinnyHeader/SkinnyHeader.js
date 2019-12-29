import React from 'react';
import { Icon, Link } from '../../../elements';
import CheckAuth from '../../../auth/AuthHelpers/CheckAuth';
import ShoppingFor from '../../../shopping/ShoppingFor/ShoppingFor';

export default ({ loaded }) => (
  <div className="nav--skinny">
    <div className="container--outer">
      <div className="nav--split">
        <div className="nav--left animated fadeIn">
        <span className="nav--link">
          <Link to="ABOUT_US" className="nav--link">About Us</Link>
          <Link to="FAQ" className="nav--link">FAQs</Link>
        </span>
        </div>
        <div className="nav--right animated fadeIn" style={{ zIndex: '201' }}>
          <div className="nav--link">
            <a href="#" className="nav--link register">
              <span>Create Account</span>
            </a>
            <a href="#" className="nav--link">Login</a>
            <div style={{ color: '#777', paddingLeft: '1rem' }}>|</div>
          </div>
          <a key="shopping" className="nav--link special">
            <ShoppingFor />
          </a>
        </div>
      </div>
    </div>
  </div>
);
