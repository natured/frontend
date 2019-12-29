import React from 'react';
import { Icon, Link } from '../../elements';
import FoodmakerImage from '../FoodmakerImage/FoodmakerImage';
import FoodmakerLocation from '../FoodmakerLocation/FoodmakerLocation';
import './foodmakerPreview.scss';

export default ({ foodmaker }) => {
  if (!foodmaker) { return null; }

  return (
    <div className="foodmaker-preview">
      <FoodmakerImage
        foodmaker={foodmaker}
        className="foodmaker-circle-image"
        options={{ square: true, size: 150 }}
      />
      <div className="foodmaker-details">
        <Link to={`FOODMAKER:${foodmaker.slug}`} className="foodmaker-link">
          {foodmaker.name} <Icon type="angleRight" size="sm" className="angle" />
        </Link>
        <FoodmakerLocation foodmaker={foodmaker} />
      </div>
    </div>
  );
};
