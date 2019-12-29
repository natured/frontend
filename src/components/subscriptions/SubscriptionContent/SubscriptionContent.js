import React from 'react';
import { Icon, Link } from '../../elements';
import HandleSubscription from '../SubscriptionHelpers/HandleSubscription';

class SubscriptionContent extends React.Component {
  state = { loading: false };

  subscribe = async () => {
    this.setState({ loading: true });
    await this.props.subscribe(this.props.productId, this.props.carted || 1);
    this.setState({ loading: false });
  }

  renderLoading = () => (
    <span><Icon type="spinner" spin /> Finding Subscription...</span>
  )

  renderManageSubscription = () => (
    <Link to="ACCOUNT_SUBSCRIPTIONS" className="subscribed">
      <span><Icon type="check" />Subscribed</span>
      <span>Edit</span>
    </Link>
  )

  // TODO: when functional on backend, add bacl
  // <Link to="ACCOUNT_SUBSCRIPTIONS" className="manage-subscription">Manage</Link>

  renderSubscribe = () => (
    <span className="subscribe" onClick={this.subscribe}>
      Subscribe <Icon type="right" />
    </span>
  )

  render() {
    if (!this.props.foundSubscriptions) { return this.renderLoading(); }
    if (this.state.loading) { return <span><Icon type="spinner" spin /></span>; }
    if (this.props.subscribed) { return this.renderManageSubscription(); }

    return this.renderSubscribe();
  }
}

export default HandleSubscription(SubscriptionContent);
