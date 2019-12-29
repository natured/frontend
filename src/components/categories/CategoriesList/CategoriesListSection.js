import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Waypoint } from 'react-waypoint';
import ProductList from '../../products/ProductList/ProductList';
import { productsOperations, productsSelectors } from '../../../ducks/products';

class CategorySection extends Component {

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    if (!this.props.products) {
      this.props.getProductsForCategory(this.props.category.slug);
    }
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

const mapStateToProps = ({ products }, { category }) => ({
  products: productsSelectors.getProductsForCategory(products, category.slug),
})

const mapDispatchToProps = {
  getProductsForCategory: productsOperations.getProductsForCategory,
};

// export default connect(mapStateToProps, { fetchProductsByCategory })(CategorySection);
export default connect(mapStateToProps, mapDispatchToProps)(CategorySection);
