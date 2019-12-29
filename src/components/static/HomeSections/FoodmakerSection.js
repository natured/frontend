import React from 'react';
import { Link } from '../../elements';
import {
  Allandale,
  Broadsheet,
  Goodnow,
  Langwater,
  ShortCreek,
  Valicenti,
} from '../../svg';

export default () => (
  <div className="bg-gray">
    <div className="container--outer" key="foodmaker-section">
      <div className="next-section logo-section">
        <div className="not-logos">
          <h3 className="header--3--ish centered">
            You’re in good hands.
          </h3>
          <p className="para--16" style={{ maxWidth: '380px', color: '#777' }}>
            Shop from over 100+ New England area farmers and artisans.
          </p>
        </div>
        <div className="logos">
          <Link to="FOODMAKER:allandale-farm" className="logo-item">
            <Allandale />
          </Link>
          <Link to="FOODMAKER:broadsheet-coffee-roasters" className="logo-item">
            <Broadsheet />
          </Link>
          <Link to="FOODMAKER:goodnow-farms-chocolate" className="logo-item">
            <Goodnow />
          </Link>
          <Link to="FOODMAKER:langwater-farm" className="logo-item">
            <Langwater />
          </Link>
          <Link to="FOODMAKER:short-creek-farm" className="logo-item">
            <ShortCreek />
          </Link>
          <Link to="FOODMAKER:valicenti-pasta-farm" className="logo-item">
            <Valicenti />
          </Link>
        </div>
      </div>
    </div>
  </div>
);
