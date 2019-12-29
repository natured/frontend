import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../../elements';
import ProductList from '../ProductList';
import { productsOperations } from '../../../../ducks/products';

class RecentlyAdded extends React.Component {
  state = { page: 1, products: [], loading: false };

  componentDidMount() {
    this.getProducts(1);
  }

  getProducts = async (page) => {
    const products = await this.props.getRecentlyAdded(page);
    
    if (products.success) {
      this.setState({
        loading: false,
        products: this.state.products.concat(products.data),
      });
    }
  }

  more = async () => {
    const page = this.state.page + 1;
    this.setState({ loading: true, page });
    this.getProducts(page);
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

const mapStateToProps = ({ products }) => ({
  products: products.recentlyAdded,
});

const mapDispatchToProps = {
  getRecentlyAdded: productsOperations.getRecentlyAdded,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyAdded);
