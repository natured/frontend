import React from 'react';
import { connect } from 'react-redux';
import { Image } from '../../../elements';
import Link from '../../../../client/elements/Link';

class ProductTileImage extends React.Component {
  toProduct = (product) => {
    if (!product) { return null; }
    return `PRODUCT:${product.foodmaker.slug},${product.slug}`;
  }

  render() {
    const { product } = this.props;
    return (
      <Link to={this.toProduct(product)} className="product-square-image">
        <Image src={product ? product.img : null} />
      </Link>
    );
  }
}

// Checks if we are on mobile screen to show different image
function mapStateToProps({ responsive }) {
  return { square: responsive.phone };
}

export default connect(mapStateToProps)(ProductTileImage);
