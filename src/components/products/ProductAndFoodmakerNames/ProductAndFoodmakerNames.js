import React from 'react';
import ContentLoader from 'react-content-loader';
import { Link } from '../../elements';
import './productAndFoodmakerNames.scss';

const Loader = () => (
  <ContentLoader>
    <rect x="15" y="15" rx="3" ry="3" width="217" height="6.4" />
    <rect x="15" y="35" rx="3" ry="3" width="185" height="6.4" />
  </ContentLoader>
);

export default ({ product }) => {
  if (!product) { return <Loader />; }

  return (
    <div className="product-name-details">
      <Link to={`PRODUCT:${product.foodmaker.slug},${product.slug}`}>
        <h3 className="product-name">{product.name}</h3>
      </Link>
      <Link to={`FOODMAKER:${product.foodmaker.slug}`}>
        <h5 className="product-foodmaker-name">{product.foodmaker.name}</h5>
      </Link>
    </div>
  );
};
