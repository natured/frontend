import React from 'react';
import FoodmakerProducts from '../../FoodmakerProducts/FoodmakerProducts';

export default ({ foodmaker }) => (
  <div className="foodmaker-products-section">
    <h5 className="header--5">Shop {foodmaker.name}</h5>
    <div className="foodmaker-products">
      <FoodmakerProducts foodmakerId={foodmaker.id} />
    </div>
  </div>
);
