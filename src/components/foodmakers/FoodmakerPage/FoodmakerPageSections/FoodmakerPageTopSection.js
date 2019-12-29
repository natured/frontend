import React from 'react';
import FoodmakerLocation from '../../FoodmakerLocation/FoodmakerLocation';
import FoodmakerImage from '../../FoodmakerImage/FoodmakerImage';

export default ({ foodmaker }) => (
  <div className="foodmaker-top-section">
    <div className="section-left">
      <div>
        <h1 className="foodmaker-name">{foodmaker.name}</h1>
        <FoodmakerLocation foodmaker={foodmaker} />
      </div>
    </div>
    <div className="section-right">
      <FoodmakerImage foodmaker={foodmaker} />
    </div>
  </div>
);
