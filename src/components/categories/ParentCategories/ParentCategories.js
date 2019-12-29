import React, { Component } from 'react';
import { connect } from 'react-redux';

class ParentCategories extends Component {
  render() {
    if (!this.props.categories) { return null; }
    return this.props.categories.map(category => (
      this.props.renderCategory(category, this.props.route)
    ));
  }
}

function mapStateToProps({ categories }) {
  return { categories: categories.parents };
}

export default connect(mapStateToProps)(ParentCategories);
