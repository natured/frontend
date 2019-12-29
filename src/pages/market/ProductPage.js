import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PageView } from '../../../services/Analytics';
import page from '../page';
import ProductAlert from '../../components/products/ProductPage/ProductAlert/ProductAlert';
import ProductPageTopSection from '../../components/products/ProductPage/ProductPageTopSection';
import ProductPageBottomSection from '../../components/products/ProductPage/ProductPageBottomSection';
import ProductPageFoodmakerSection from '../../components/products/ProductPage/ProductPageFoodmakerSection';
import { productsSelectors, productsOperations } from '../../ducks/products';

class ProductPage extends Component {
  static head = ({ product }) => ({
    alone: true,
    title: product ? `${product.name} - ${product.foodmaker.name} | Delivered with Natured | Boston` : null,
    img: product ? `https://natured.s3.amazonaws.com/imgix/${product.img}.jpg` : null,
  });

  componentDidMount() {
    this.checkForProduct(this.props);
  }

  componentWillUpdate(nextProps) {
    this.checkForProduct(nextProps);
  }

  checkForProduct = ({ product, match }) => {
    product ? this.track(product) : this.getProduct(match.params); // eslint-disable-line
  }

  track = (product) => {
    // PageView.track('Product', product);
  }

  getProduct = ({ product, foodmaker }) => {
    this.props.getProductBySlugs(product, foodmaker);
  }

  render() {
    return [
      <div key="1" className="product-page animated fadeIn">
        <ProductAlert product={this.props.product} />
        <ProductPageTopSection product={this.props.product} />
        <ProductPageBottomSection product={this.props.product} />
      </div>,
      <div key="2" className="bg-gray">
        <div className="product-page animated fadeIn product-page-foodmaker">
          <ProductPageFoodmakerSection product={this.props.product} />
        </div>
      </div>,
    ];
  }
}

const mapState = ({ productsNew }, { match }) => ({
  product: productsSelectors.lookupByMatch(productsNew, match.params),
});

const mapDispatch = {
  getProductBySlugs: productsOperations.getProductBySlugs,
};

export default {
  component: connect(mapState, mapDispatch)(page(ProductPage)),
  loadDataWithMatch: (store, { params: { foodmaker, product } }) => (
    store.dispatch(productsOperations.getProductBySlugs(product, foodmaker))
  ),
};
