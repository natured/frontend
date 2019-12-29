import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../elements';
import { productsOperations } from '../../../ducks/products';
import ProductListSection from '../../products/ProductList/ProductListSection/ProductListSection';

class ProductSections extends React.Component {
  state = { loading: true, sections: [] };

  componentWillMount() {
    this.getSections();
  }

  getSections = async () => {
    const sections = await this.props.getProductSections();
    this.setState({ loading: false, sections });
  }

  render() {
    if (this.state.loading) { return <Icon type="spinner" spin />; }

    if (this.state.sections.length === 0) { return null; }

    return (
      <div className="container--outer" key="recently-added-section">
        <div className="next-section">
          {this.state.sections.map(({ id, title, products }) => (
            <ProductListSection key={id} title={title} products={products} />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatch = { getProductSections: productsOperations.getProductSections };
export default connect(null, mapDispatch)(ProductSections);
