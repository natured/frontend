import React from 'react';
import { connect } from 'react-redux';
import RequireAuth from '../../auth/AuthHelpers/RequireAuth';
import { productsOperations, productsSelectors } from '../../../ducks/products';
import { shoppingSelectors } from '../../../ducks/shopping';
import ProductDetailsSection from '../ProductDetails/ProductDetailsSection/ProductDetailsSection';
import './productAddBy.scss';

class ProductAddBySection extends React.Component {
  componentWillMount() {
    this.getGuaranteedDelivery();
  }

  componentDidUpdate() {
    this.getGuaranteedDelivery();
  }

  time = (hour) => {
    if (hour === 0) { return 'midnight'; }
    if (hour < 12) { return `${hour}am`; }
    if (hour === 12) { return 'noon'; }
    return `${hour - 12}pm`;
  }

  formatDate = ({ day, time }) => (
    `${day} at ${this.time(time)}`
  )

  getGuaranteedDelivery = () => {
    const { addBy, productId, day, time } = this.props;
    if (addBy === null && productId && day && time) {
      this.props.getAddByForProduct(productId, { day, time });
    }
  }

  noRecur = () => (
    <div>
      This item is sourced week to week and require us to check
      in with our food makers before we can get them back into the market.
    </div>
  )

  recur = addBy => (
    <div>
      <h4 className="product-add-by">
        Add by {this.formatDate(addBy)} for delivery on {this.props.day}
      </h4>

      You may be asking why? We work with small, independent food makers
      and any constraints they may have (like making food by hand!)  Add it to
      your cart by <u>{this.formatDate(addBy)}</u> so we are able to source it for
      you, guaranteed.
    </div>
  )

  renderContent = (addBy) => {
    if (addBy === null) { return 'Loading...'; }
    return addBy ? this.recur(addBy) : this.noRecur();
  }

  render() {
    return (
      <ProductDetailsSection title="Shopping for this item">
        {this.renderContent(this.props.addBy)}
      </ProductDetailsSection>
    );
  }
}

const mapState = ({ shopping, productsNew }, { product }) => ({
  productId: product ? product.id : null,
  day: shoppingSelectors.getDayOfWeek(shopping),
  time: shoppingSelectors.getHour(shopping),
  addBy: productsSelectors.getAddBy(productsNew, product),
});

const mapDispatch = {
  getAddByForProduct: productsOperations.getAddByForProduct,
};

export default connect(mapState, mapDispatch)(RequireAuth(ProductAddBySection, false));
