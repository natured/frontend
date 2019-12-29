import React, { Component } from 'react';
import CategoryNavigationDropdown from './CategoryNavigationDropdown';
import CategoryNavigationLink from './CategoryNavigationLink';

const parent = (category, active, handle) => {
  const { productCount, children, slug } = category;
  if (productCount > 0 || children.length > 0) {
    return <CategoryNavigationLink parent key={slug} category={category} active={active} handle={handle} />;
  }
};

const children = (categories, active, handle) => (
  <div key="child" className="side--children">
    {categories.map((category) => {
      if (category.productCount > 0) {
        return <CategoryNavigationLink key={category.slug} category={category} active={active} handle={handle} />;
      } else {
        return null;
      }
    })}
  </div>
);

class CategoryNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { active: [] };
  }

  // Store both the active categoryI d and its parentId
  handle = ({ categoryId, parentId }) => {
    this.setState({ active: [categoryId, parentId] });
  }

  render() {
    return [
      <CategoryNavigationDropdown key="dropdown" active={this.state.active} categories={this.props.categories} />,
      this.props.categories.map(category => [
        parent(category, this.state.active, this.handle),
        children(category.children, this.state.active, this.handle),
      ]),
    ];
  }
}

export default CategoryNavigation;
