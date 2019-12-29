import React from 'react';
import { connect } from 'react-redux';
import { sectionsOperations } from '../../../ducks/sections';
import { Icon } from '../../elements';
import ProductListSection from '../../products/ProductList/ProductListSection/ProductListSection';

class ProductSections extends React.Component {
  componentDidMount() {
    this.props.getSections();
  }

  render() {
    if (!this.props.sections) { return <Icon type="spinner" spin />; }

    if (this.props.sections.length === 0) { return null; }

    return (
      <div className="container--outer" key="recently-added-section">
        <div className="next-section">
          {this.props.sections.map(({ id, title, products }) => (
            <ProductListSection key={id} title={title} products={products} />
          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ sections }) => ({
  sections,
});

const mapDispatchToProps = {
  getSections: sectionsOperations.getSections,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSections);
