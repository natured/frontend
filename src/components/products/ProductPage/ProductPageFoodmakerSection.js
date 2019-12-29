import React from 'react';
import renderHTML from 'react-render-html';
import { Icon } from '../../elements';
import FoodmakerLink from '../../foodmakers/FoodmakerLink';
import FoodmakerImage from '../../foodmakers/FoodmakerImage/FoodmakerImage';
import './productPageFoodmakerSection.scss';

class ProductPageFoodmakerSection extends React.Component {

  render() {
    if (!this.props.product) { return 'Loading...'; }
    const { foodmaker } = this.props.product;

    return (
      <div className="foodmaker-section">
        <div className="foodmaker-content">
          <FoodmakerLink foodmaker={foodmaker} className="foodmaker-link">
            <FoodmakerImage
              foodmaker={foodmaker}
              className="foodmaker-circle-image"
              options={{ square: true, size: 150 }}
            />
            <div className="foodmaker-details">
              <h1 className="header--3--ish">{foodmaker.name}</h1>
              <p className="foodmaker-location">
                <span className="centered">{foodmaker.location}</span>
              </p>
            </div>
          </FoodmakerLink>
          <FoodmakerLink foodmaker={foodmaker} className="button--midnight--inverted foodmaker-button">
            View More {foodmaker.name} &nbsp; &nbsp;
            <Icon type="longArrowRight" />
          </FoodmakerLink>
        </div>
        <div className="foodmaker--description">
          <div className="quoted">
            <img
              alt=""
              src="https://natured.s3.amazonaws.com/imgix/assets/icons/left-quote.png"
              className="left-quote"
            />
            <div className="quote-content">
              {renderHTML(foodmaker.description.split('</p>')[0])}
            </div>
            <div className="read-more">
              <FoodmakerLink foodmaker={foodmaker} className="button--midnight--inverted">
                View More {foodmaker.name} &nbsp; &nbsp;
                <Icon type="longArrowRight" />
              </FoodmakerLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPageFoodmakerSection;
