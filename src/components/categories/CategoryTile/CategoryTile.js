import React from 'react';
import { Link, Icon } from '../../elements';
import CategoryImage from '../CategoryImage/CategoryImage';
import './categoryTile.scss';

export default ({ slug, name }) => (
  <Link key={slug} to={`CATEGORY:${slug}`} className="category-outer">
    <div className="category-inner">
      <div className="category-overlay" />
      <CategoryImage name={name} slug={slug} options={{ square: false }} />
      <h5 className="category-name">
        {name} <span className="angle"><Icon type="right" /></span>
      </h5>
    </div>
  </Link>
);
