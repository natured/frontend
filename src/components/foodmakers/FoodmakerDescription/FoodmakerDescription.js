import React from 'react';
import renderHTML from 'react-render-html';
import './foodmakerDescription.scss';

export default ({ foodmaker }) => (
  <div className="foodmaker-page-section">
    <h5 className="header--orange--upper">About {foodmaker.name}</h5>
    <div className="foodmaker-description">
      {foodmaker ? renderHTML(foodmaker.description) : null}
    </div>
  </div>
);
