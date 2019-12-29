import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Image } from '../../elements';
import Overlay from '../../shopping/Overlay/Overlay';
import './productImage.scss';

class TileImage extends Component {
  render() {
    const { product } = this.props;
    const to = product ? `PRODUCT:${product.foodmaker.slug},${product.slug}` : null;

    const placeholder = product ? {
      url: product.img,
      options: {
        blur: 50,
        w: 300,
        auto: 'compress',
      },
    } : null;

    return (
      <Link to={to} className="product-square-image bg-white">
        <Overlay productId={product ? product.id : null} />
        <Image
          img={product ? product.img : ''}
          placeholder={placeholder}
        />
      </Link>
    );
  }
}

// Checks if we are on mobile screen to show different image
function mapStateToProps({ responsive }) {
  return { square: responsive.phone };
}

export default connect(mapStateToProps)(TileImage);
