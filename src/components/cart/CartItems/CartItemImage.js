import React from 'react';
import ProductImage from '../../products/ProductImages/ProductImage';

class CartItemImage extends React.Component {
  render() {
    const props = { product: this.props.product, className: 'cart--item--image' };

    // on mobile, render square and small image
    // on desktop, render rectangular image
    const placeholders = {
      mobile: {
        url: this.props.product.img,
        options: {
          blur: 50, w: 100, auto: 'format',
        },
      },
      desktop: {
        url: this.props.product.img,
        options: {
          blur: 50, w: 200, auto: 'format',
        },
      },
    };

    const options = {
      mobile: {
        square: true,
        size: 100,
      },
      desktop: {
        w: 200,
      },
    };


    return (
      <ProductImage
        {...props}
        options={options.desktop}
        placeholder={placeholders.mobile}
      />
    );
  }
}

export default CartItemImage;
