import React from 'react';
import Link from '../../../client/elements/Link';
import './sections.scss';

const Block = ({ title, children }) => (
  <div className="section">
    <div className="content">
      <h1 className="header--7">{title}</h1>
      <p>{children}</p>
    </div>
  </div>
);

export default () => (
  <div className="container--outer fill-mobile" key="why-natured-section">
    <div className="docks-photo docks-bg">
      <div className="why-natured--container">
        <div>
          <div className="titles">
            <h1 className="header--4--thin">Why Natured?</h1>
            <h1 className="header--3--slate-gray">Better groceries. Better you.</h1>
          </div>
          <div className="three-sections">
            <Block title="Carefully Curated">
              We say no to questionable ingredients & practices so you
              can feel good about more than just the taste.
            </Block>
            <Block title="Purposefully Transparent">
              We’re believers in getting to know your food. Get to know
              people & practices behind what you eat every day.
            </Block>
            <Block title="Passionately Local">
                Because local not only tastes better but feels better.
              Easily support local food makers while eating wildly fresh food.
            </Block>
          </div>
          <div className="cta">
            <Link to="REGISTER" className="button--orange">
              Join Our Movement
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
