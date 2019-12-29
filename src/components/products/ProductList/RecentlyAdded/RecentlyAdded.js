import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../../elements';
import ProductList from '../ProductList';
import { productsOperations } from '../../../../ducks/products';

class RecentlyAdded extends React.Component {
  state = { page: 1, products: [], loading: false };

  componentWillMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const products = await this.props.getRecentlyAdded(this.state.page);
    this.setState({ products });
  }

  more = async () => {
    const page = this.state.page + 1;
    this.setState({ loading: true, page });
    const products = await this.props.getRecentlyAdded(page);
    this.setState({ products: this.state.products.concat(products), loading: false });
  }

  renderButton = () => {
    if (this.state.loading) { return <Icon type="spinner" spin />; }

    return (
      <button onClick={this.more} className="button--midnight--inverted--large--pill">
        <span>Show More &nbsp; &nbsp; &nbsp; <Icon type="down" /></span>
      </button>
    );
  }

  render() {
    const length = this.state.page * 4;
    return (
      <div className="category--section">
        <h1 className="header--4--ish">Recently added</h1>
        <ProductList products={this.state.products} length={length} />
        <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

const mapState = ({ productsNew }) => ({ products: productsNew.recentlyAdded });
const mapDispatch = { getRecentlyAdded: productsOperations.getRecentlyAdded };
export default connect(mapState, mapDispatch)(RecentlyAdded);
