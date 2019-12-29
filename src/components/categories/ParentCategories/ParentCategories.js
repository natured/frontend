import React, { Component } from 'react';
import { connect } from 'react-redux';

// map the parent categories to props
const mapStateToProps = ({ categories }) => ({ parents: categories.parents });

export default connect(mapStateToProps)(({ parents, route, renderCategory }) => {
  console.log({ parents });
  // if no parents exist, don't render anything
  if (!parents) { return null };

  // otherwise, use the renderCategory prop to display each category
  return parents.map(parent => renderCategory(parent, route));
});
