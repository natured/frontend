import React from 'react';
import CategoryLink from '../../categories/CategoryLink';
import './productBreadcrumbs.scss';

class ProductBreadcrumbs extends React.Component {
  renderCrumb = (category, last) => (
    <CategoryLink key={category.id} category={category} className={`breadcrumb ${last ? 'active' : ''}`}>
      {category.name} {last ? 'last' : 'not last'}
    </CategoryLink>
  )

  renderCategory = (category, last) => {
    if (!category.parent) { return this.renderCrumb(category); }

    return [
      this.renderCategory(category.parent, false),
      <span key={`${category.id}-spacer`}>&nbsp; &nbsp; / &nbsp; &nbsp;</span>,
      this.renderCrumb(category, last),
    ];
  }

  render() {
    return (
      <div className="product-breadcrumbs">
        {this.renderCategory(this.props.product.category, true)}
      </div>
    );
  }
}

export default ProductBreadcrumbs;
