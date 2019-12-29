import React from 'react';
import './sections.scss';

export default ({ who }) => (
  <section className="top-section ravioli-bg">
    <div>
      <div className="container--outer">
        <div className="quick-intro">
          <p className="header--upper">
            HEY, {who}!
          </p>
          <h1 className="header--jumbo-4">
            We are New England’s online farmer’s market.
          </h1>
          <p className="para">
            We’re on a mission to make your food system more local, to
            endlessly support local food makers, and to bring you the best
            food imaginable.
          </p>
        </div>
      </div>
    </div>
  </section>
);
