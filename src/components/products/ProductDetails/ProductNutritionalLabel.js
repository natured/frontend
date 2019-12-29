import React from 'react';
import { Icon, Image } from '../../elements';
import './nutritionalLabel.scss';

class ProductNutritionalLabel extends React.Component {
  state = { show: false };

  toggle = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { product } = this.props;
    if (!product || !product.more || !product.more.nutritionalLabel) { return null; }

    return (
      <div className="product-page-section nutritional-label">
        <div>
          <h5 className="header--orange--upper" onClick={this.toggle}>
            Nutritional Label <Icon type={this.state.show ? 'up' : 'down'} />
          </h5>
          <div className="descriptions">
            {this.state.show ? <Image img={product.more.nutritionalLabel} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductNutritionalLabel;
