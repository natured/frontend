import React from 'react';
import { connect } from 'react-redux';
import { shoppingSelectors } from '../../../ducks/shopping';

class CartTitle extends React.Component {
  render() {
    const { day, start, end } = this.props;
    return (
      <div className="basket--header">
        <div className="header--5 cart--title">Your Basket</div>
        <div className="delivery--title">
          <div className="delivery-day">Delivery for {day}</div>
          <div className="delivery-window">Arrives between {start} - {end}</div>
        </div>
      </div>
    );
  }
}

const mapState = ({ shopping }) => ({
  day: shoppingSelectors.deliveryDate(shopping),
  start: shoppingSelectors.startTime(shopping),
  end: shoppingSelectors.endTime(shopping),
});

export default connect(mapState)(CartTitle);
