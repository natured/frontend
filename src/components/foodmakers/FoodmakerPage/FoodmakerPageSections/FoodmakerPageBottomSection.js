import React from 'react';
import FoodmakerDescription from '../../FoodmakerDescription/FoodmakerDescription';

export default ({ foodmaker }) => (
  <div className="foodmaker-bottom-section">
    <FoodmakerDescription foodmaker={foodmaker} />
  </div>
);
