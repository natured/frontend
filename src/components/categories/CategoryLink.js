import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({ top: elementPosition });
};

export default ({ category, className = '' }) => {
  let main = category.slug;

  if (category.parent) {
    if (category.parent.parent) {
      main = category.parent.parent.slug;
    } else {
      main = category.parent.slug;
    }
  }

  const url = `/boston/market/browse/${main}#${category.slug}`;

  return (
    <Link to={url} scroll={el => scrollWithOffset(el, 60)} className={className}>
      {category.name}
    </Link>
  );
};
