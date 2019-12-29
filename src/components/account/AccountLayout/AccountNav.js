import React from 'react';
import { Link } from '../../elements';
import pages from '../pages';

const Parent = ({ page }) => (
  <Link nav to={page.route} className="side--link--parent">
    <span>{page.name}</span>
  </Link>
);

const Children = ({ sublinks }) => (
  <div key="child" className="side--children">
    {!sublinks ? null : sublinks.map(sublink => (
      <a key={sublink} className="side--link--child">{sublink}</a>
    ))}
  </div>
);

export default () => (
  pages.map(page => [
    <Parent key="parent" page={page} />,
    <Children key="children" sublinks={page.sublinks} />,
  ])
);
