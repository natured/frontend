import React from 'react';
import Sticky from '../../layout/Sticky/Sticky';
import CategoriesList from '../CategoriesList/CategoriesList';
import CategoryNavigation from '../CategoryNavigation/CategoryNavigation';

export default ({ category }) => (
  <div className="container--outer">
    <div className="category--container">
      <div className="category--nav">
        <Sticky className="sticky--nav">
          <CategoryNavigation categories={category.children} />
        </Sticky>
      </div>
      <div className="category--content">
        <CategoriesList categories={category.children} />
      </div>
    </div>
  </div>
);
