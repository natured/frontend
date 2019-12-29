import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Loader } from '../../elements';
import ProductList from '../../products/ProductList/ProductList';
import { productsOperations } from '../../../ducks/products';

class FoodmakerProducts extends React.Component {
  static propTypes = { foodmakerId: PropTypes.string.isRequired };

  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const products = await this.props.getProducts(this.props.foodmakerId);
    this.setState({ products });
  }

  render() {
    if (!this.state.products) { return <Loader minHeight={200} />; }
    return <ProductList products={this.state.products} />;
  }
}

const mapDispatch = { getProducts: productsOperations.getProductsForFoodmaker };
export default connect(null, mapDispatch)(FoodmakerProducts);
