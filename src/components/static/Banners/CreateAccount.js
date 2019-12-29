import React from 'react';
import { Link, Icon } from '../../elements';
import './banner.scss';

export default () => (
  <div className="banner">
    <div className="container--outer">
      <div className="banner-cols">
        <div className="banner-col">
          <p className="para">
            We’re bringing the best from New England’s farmers, bakers,
            pasta makers, & more, right to your doorstep.
          </p>
        </div>
        <div className="banner-col">
          <Link to="REGISTER" className="button--light-blue--jumbo">
            <span style={{ paddingRight: '25px' }}>Create an Account</span>
            <Icon type="longArrowRight" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);
