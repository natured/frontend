import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shoppingOperations, shoppingSelectors } from '../../../ducks/shopping';

class ShoppingFor extends Component {
  componentDidMount() {
    if (!this.props.deliveryDay) {
      this.props.getTimeslot();
    }
  }

  render() {
    if (!this.props.deliveryDay) { return <div>Loading...</div>; }

    return (
      <div className={this.props.className}>
        {this.props.pretext || 'Shopping for'} {this.props.deliveryDay}
      </div>
    );
  }
}

const mapState = ({ shopping }) => ({
  timeslots: shoppingSelectors.getTimeslots(shopping),
  deliveryDay: shoppingSelectors.getDeliveryDay(shopping),
});

const mapDispatch = {
  getTimeslot: shoppingOperations.getTimeslot,
  getTimeslots: shoppingOperations.getTimeslots,
};

export default connect(mapState, mapDispatch)(ShoppingFor);
