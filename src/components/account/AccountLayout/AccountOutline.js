import React from 'react';
import Sticky from '../../layout/Sticky/Sticky';
import AccountNav from './AccountNav';
import './accountOutline.scss';

export default ({ current, children }) => (
  <div className="animated fadeIn">
    <div className="container--outer">
      <div className="account--container">
        <div className="account--nav">
          <Sticky className="sticky--nav">
            <AccountNav current={current} />
          </Sticky>
        </div>
        <div className="account--content">
          {children}
        </div>
      </div>
    </div>
  </div>
);
