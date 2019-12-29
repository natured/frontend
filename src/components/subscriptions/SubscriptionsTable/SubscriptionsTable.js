import React, { Component } from 'react';
import HandleSubscription from '../SubscriptionHelpers/HandleSubscription';
import SubscriptionsTableRow from './SubscriptionsTableRow';
import './subscriptionsTable.scss';

class SubscriptionsTable extends Component {
  renderSubscriptions = () => {
    if (this.props.subscriptions.length === 0) {
      return <div>You are not subscribed to any products.</div>;
    }

    return this.props.subscriptions.map(subscription => (
      <SubscriptionsTableRow key={subscription.id} subscription={subscription} />
    ));
  }

  render() {
    return (
      <div className="product-subscriptions">
        {this.renderSubscriptions()}
      </div>
    );
  }
}

export default HandleSubscription(SubscriptionsTable);
