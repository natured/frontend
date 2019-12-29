import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subscriptionsSelectors, subscriptionsOperations } from '../../../ducks/subscriptions';
import { cartSelectors } from '../../../ducks/cart';

export default (ChildComponent) => {
  class HandleSubscription extends Component {
    componentDidMount() {
      if (!this.props.foundSubscriptions) {
        this.props.getSubscriptions();
      }
    }

    componentDidUpdate() {
      if (!this.props.foundSubscriptions) {
        this.props.getSubscriptions();
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapState = ({ subscriptions, cart }, { productId }) => ({
    foundSubscriptions: subscriptionsSelectors.foundSubscriptions(subscriptions),
    subscribed: subscriptionsSelectors.subscribed(subscriptions, productId),
    subscriptions: subscriptionsSelectors.activeSubscriptions(subscriptions),
    carted: cartSelectors.getCartedQuantity(cart, productId),
  });

  const mapDispatch = {
    getSubscriptions: subscriptionsOperations.getSubscriptions,
    subscribe: subscriptionsOperations.subscribe,
  };

  return connect(mapState, mapDispatch)(HandleSubscription);
};
