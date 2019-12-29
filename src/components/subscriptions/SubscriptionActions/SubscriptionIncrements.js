import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../elements';
import { subscriptionsOperations } from '../../../ducks/subscriptions';

class SubscriptionIncrements extends React.Component {
  state = { loading: false };

  loading = (value) => {
    this.setState({ loading: value });
  }

  update = async (quantity) => {
    if (!this.state.loading) {
      this.loading(true);
      await this.props.updateSubscription(this.props.subscription.id, quantity);
      this.loading(false);
    }
  }

  render() {
    const loading = this.state.loading ? 'loading' : '';
    const { quantity } = this.props.subscription;

    return (
      <div className={`increments ${loading}`}>
        <div onClick={() => this.update(quantity - 1)} className="icon">
          <Icon type="minus" />
        </div>
        {this.state.loading ? <Icon type="spinner" spin /> : quantity}
        <div onClick={() => this.update(quantity + 1)} className="icon">
          <Icon type="plus" />
        </div>
      </div>
    );
  }
}

const mapDispatch = {
  updateSubscription: subscriptionsOperations.updateSubscription,
};

export default connect(null, mapDispatch)(SubscriptionIncrements);
