import React, { Component } from 'react';
import AddToCart from '../../shopping/AddToCart/AddToCart';
import ProductAndFoodmakerNames from '../ProductAndFoodmakerNames/ProductAndFoodmakerNames';
import ProductTilePricing from '../ProductPricing/ProductTilePricing';
import ProductTileImage from '../ProductImages/ProductTileImage';
import ProductSubscription from '../../subscriptions/ProductSubscription';
import './productTile.scss';

class ProductTile extends Component {
  renderPurchaseDetails = () => {
    if (!this.props.product) { return null; }

    return (
      <div className="product-purchase-details">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddToCart
            key={this.props.product.id}
            showRemove
            productId={this.props.product.id}
            productName={this.props.product.name}
            product={this.props.product}
          />
        </div>
        <ProductTilePricing product={this.props.product} />
      </div>
    );
  }

  render() {
    return (
      <div className="product-tile-holder product--tile">
        <div className="product-tile">
          <ProductTileImage product={this.props.product} />
          <div className="product-info-section">
            <div className="product-details">
              <ProductAndFoodmakerNames product={this.props.product} />
              <div>
                <ProductSubscription product={this.props.product} />
                {this.renderPurchaseDetails()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductTile;
