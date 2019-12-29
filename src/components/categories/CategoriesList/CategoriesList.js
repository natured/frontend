import React from 'react';
import CategoriesListSection from './CategoriesListSection';

const parent = (category) => {
  // Only render if it has children
  if (category.productCount > 0) {
    return <CategoriesListSection key={category.id} category={category} />;
  }

  // Used for navigating to parent (i.e. "fruits")
  return <div id={category.slug} key={category.id} />;
};

const children = categories => (
  categories.map((category) => { // eslint-disable-line
    if (category.productCount > 0) {
      return <CategoriesListSection key={category.id} category={category} />;
    }
  })
);

export default ({ categories }) => (
  categories.map(category => [parent(category), children(category.children)])
);
