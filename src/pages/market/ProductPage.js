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

  componentDidUpdate(nextProps) {
    this.checkForProduct(nextProps);
  }

  checkForProduct = ({ product, match }) => {
    if (!product) {
      this.getProduct(match.params);
    }
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

const mapStateToProps = ({ products }, { match }) => ({
  product: productsSelectors.lookupByMatch(products, match.params),
});

const mapDispatchToProps = {
  getProductBySlugs: productsOperations.getProductBySlugs,
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(page(ProductPage)),
};
