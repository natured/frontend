import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Waypoint } from 'react-waypoint';
// todo: move products list into products
import ProductList from '../../products/ProductList/ProductList';
// import { fetchProductsByCategory } from '../../../client/actions';

class CategorySection extends Component {

  loadProducts = () => {
    // if (!this.props.products) {
    //   const { id, slug } = this.props.category;
    //   this.props.fetchProductsByCategory({ id, slug });
    // }
  }

  render() {
    const { category, products } = this.props;
    return (
      <Waypoint onEnter={this.loadProducts} fireOnRapidScroll={false}>
        <div id={category.slug} className="category--section">
          <h1 className="header--3--ish">{category.name}</h1>
          <ProductList products={products} length={category.productCount} />
        </div>
      </Waypoint>
    );
  }
}

function mapStateToProps({ products }, { category }) {
  return { products: products.byCategory[category.slug] || null };
}

// export default connect(mapStateToProps, { fetchProductsByCategory })(CategorySection);
export default connect(mapStateToProps)(CategorySection);
