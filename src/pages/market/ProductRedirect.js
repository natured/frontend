import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import page from '../page';
import { productsSelectors, productsOperations } from '../../ducks/products';
import NotFound from '../../components/static/NotFound/NotFound';

class ProductRedirect extends Component {
  componentWillMount() {
    if (this.props.product === 'loading') {
      this.getProduct(this.props.match.params.productId);
    }
  }

  getProduct = (productId) => {
    this.props.getProductById(productId);
  }

  render() {
    if (this.props.product === 'loading') {
      return <div className="product-page full-height" />;
    }

    if (this.props.product === 'error') {
      return <NotFound />;
    }

    const { product, product: { foodmaker } } = this.props;
    return <Redirect to={`/boston/market/${foodmaker.slug}/${product.slug}`} />;
  }
}

const mapState = ({ productsNew }, { match }) => ({
  product: productsSelectors.lookupById(productsNew, match.params.productId),
});

const mapDispatch = { getProductById: productsOperations.getProductById };

export default {
  component: connect(mapState, mapDispatch)(page(ProductRedirect, 'page--error')),
  loadDataWithMatch: (store, { params: { productId } }) => (
    store.dispatch(productsOperations.getProductById(productId))
  ),
};
