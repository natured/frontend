import React from 'react';
import { Link } from '../../../elements';
import NavToggle from '../../Drawers/Toggles/NavToggle';
import CartToggle from '../../Drawers/Toggles/CartToggle';
import BrandLink from '../../Brand/BrandLink';
import ParentCategories from '../../../categories/ParentCategories/ParentCategories';

const renderCategory = ({ slug, name }, route) => {
  const props = { nav: true, key: slug, className: 'nav--link', route };
  return <Link to={`CATEGORY:${slug}`} {...props}>{name}</Link>;
};

/**
 * Render both mobile + desktop content
 *   styling will take care of what to display when
 */
export default ({ route, loaded }) => (
  <div className="nav--main">
    <div className="container--outer">
      <div className="nav--split">
        <div className="nav--left">
          <NavToggle />
          <BrandLink className="nav--logo" fill="#343434" />
          {loaded ? <ParentCategories renderCategory={renderCategory} route={route} /> : null}
        </div>
        <div className="nav--right animated fadeIn">
          {loaded ? <CartToggle /> : null}
        </div>
      </div>
    </div>
  </div>
);
