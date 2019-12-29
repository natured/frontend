import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { cartSelectors } from '../../../ducks/cart';
import { Icon } from '../../elements';

class CheckoutBanner extends React.Component {
  state = { expiration: null };

  componentDidMount() {
    this.interval = setInterval(() => this.update(this.props.expiration), 60000);
  }

  componentDidMount() {
    this.update(this.props.expiration);
  }

  componentWillUpdate({ expiration }) {
    if (this.props.expiration !== expiration) {
      this.update(expiration);
    }
  }

  update = (expiration) => {
    if (expiration) {
      const diff = moment(expiration).diff(moment(), 'minutes');
      const hours = Math.trunc(diff / 60);
      const minutes = diff % 60;

      // builds string to return
      const hourString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''} and ` : '';
      const minuteString = minutes === 1 ? '1 minute' : `${minutes} minutes`;
      this.setState({ expiration: `${hourString}${minuteString}` });
    } else {
      this.setState({ expiration: null });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (!this.props.expiration) { return null; }

    return (
      <div className="checkout-banner animated fadeIn">
        <Icon type="exclamation" className="icon" />
        <span>
          Checkout within
          <b> {this.state.expiration} </b>
          for guaranteed delivery of the items in your basket.
        </span>
      </div>
    );
  }
}

const mapState = ({ cart }) => ({
  expiration: cartSelectors.getExpiration(cart),
});

export default connect(mapState)(CheckoutBanner);
