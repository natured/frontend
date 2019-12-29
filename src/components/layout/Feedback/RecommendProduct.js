import React from 'react';
import { Icon } from '../../elements';
import './feedback.scss';

export default ({ location }) => {
  const split = location.split('/boston/market/browse');

  if (split.length < 2 || split[1].length < 2) { return null; }

  return (
    <div className="bg-gray">
      <div className="animated fadeIn container--outer">
        <div className="recommend-product">
          <p className="para--16">
            Couldn’t find what you need?
          </p>
          <a
            href="https://natured.typeform.com/to/MDgyEM"
            target="_blank"
            rel="noopener noreferrer"
            className="button--midnight--transparent--large inverted"
          >
            Recommend a Product &nbsp; <Icon type="angleRight" />
          </a>
        </div>
      </div>
    </div>
  );
};
