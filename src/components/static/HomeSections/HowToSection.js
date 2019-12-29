import React from 'react';
import './howToSection.scss';

const Block = ({ title, children, icon }) => (
  <div>
    <div className="segment">
      <img src={`http://natured.s3.amazonaws.com/imgix/assets/icons/${icon}.svg`} style={{ maxWidth: '75px', paddingBottom: '15px' }}/>
      <h1 className="header--6--ish">{title}</h1>
      <p className="subtitle">{children}</p>
    </div>
  </div>
);

export default () => (
  <div className="container--outer" key="quick-stats-section">
    <div className="next-section section-on-white how-to-section">
      <div className="set-of-three">
        <Block title="Locally sourced eats" icon="placeholder">
          Shop from over 100+ New England area farmers & artisans.
        </Block>
        <Block title="Better all around" icon="deal">
          Better for you, producers, animals, & the environment.
        </Block>
        <Block title="Delivered to your door" icon="delivery">
          <span className="yellow--emphasis">FREE</span> delivery on orders <br />
          over $50, or $9.99 when below.
        </Block>
      </div>
    </div>
  </div>
);
