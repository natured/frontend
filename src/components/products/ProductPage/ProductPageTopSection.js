import React from 'react';
import ProductPageImage from '../ProductImages/ProductPageImage';
import ProductBreadcrumbs from '../ProductBreadcrumbs/ProductBreadcrumbs';
import ProductAndFoodmakerNames from '../ProductAndFoodmakerNames/ProductAndFoodmakerNames';
import ProductPagePricing from '../ProductPricing/ProductPagePricing';
import ProductPageActions from '../ProductActions/ProductPageActions';
import './productPageTop.scss';

const Breadcrumbs = ({ product }) => (
  product ? <ProductBreadcrumbs product={product} /> : null
);

export default ({ product }) => (
  <div className="top-section">
    <ProductPageImage product={product} />
    <div className="product-details">
      <div>
        <Breadcrumbs product={product} />
        <div className="product-snippet">
          <ProductAndFoodmakerNames product={product} />
        </div>
      </div>
      <div>
        <ProductPagePricing product={product} />
        <ProductPageActions product={product} />
      </div>
    </div>
  </div>
);
