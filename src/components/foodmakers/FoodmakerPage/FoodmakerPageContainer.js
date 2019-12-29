import React from 'react';
import FoodmakerPageTopSection from './FoodmakerPageSections/FoodmakerPageTopSection';
import FoodmakerPageBottomSection from './FoodmakerPageSections/FoodmakerPageBottomSection';
import FoodmakerPageProductsList from './FoodmakerPageSections/FoodmakerPageProductsList';
import './foodmakerPage.scss';

export default ({ foodmaker }) => (
  <div className="foodmaker-page animated fadeIn">
    <FoodmakerPageTopSection foodmaker={foodmaker} />
    <FoodmakerPageBottomSection foodmaker={foodmaker} />
    <FoodmakerPageProductsList foodmaker={foodmaker} />
  </div>
);
