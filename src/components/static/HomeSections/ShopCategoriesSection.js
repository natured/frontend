import React from 'react';
import ParentCategories from '../../categories/ParentCategories/ParentCategories';
import CategoryTile from '../../categories/CategoryTile/CategoryTile';
import './shopCategoriesSection.scss';

export default () => (
  <div className="container--outer category-section">
    <div className="category-section-header">
      <h1 className="header--4--ish">Shop all aisles</h1>
      <p className="subtitle">
        From just baked bread to ethically raised grass fed meats, we’ve got you
        covered in all the aisles for your weekly shop.
      </p>
    </div>

    <div className="category-images">
      <ParentCategories renderCategory={CategoryTile} />
    </div>
  </div>
);
