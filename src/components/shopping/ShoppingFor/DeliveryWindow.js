import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shoppingOperations, shoppingSelectors } from '../../../ducks/shopping';

class DeliveryWindow extends Component {
  componentWillMount() {
    if (!this.props.deliveryDay) {
      this.props.getTimeslot();
    }
  }

  render() {
    if (!this.props.startTime || !this.props.endTime) {
      return <div>Loading...</div>;
    }

    return (
      <div className="delivery-window">
        Between {this.props.startTime} and {this.props.endTime}
      </div>
    );
  }
}

const mapState = ({ shopping }) => ({
  endTime: shoppingSelectors.endTime(shopping),
  startTime: shoppingSelectors.startTime(shopping),
});

const mapDispatch = { getTimeslot: shoppingOperations.getTimeslot };
export default connect(mapState, mapDispatch)(DeliveryWindow);
