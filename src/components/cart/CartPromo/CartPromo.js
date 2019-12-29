import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../elements';
import './cartPromo.scss';

class CartPromo extends React.Component {
  render() {
    if (!this.props.code) { return null; }

    return (
      <div className="cart-promo">
        <Icon type="gift" />
        <span>You’ve activated $10 off your first order!</span>
      </div>
    );
  }
}

const mapState = ({ promos }) => ({ code: promos.code });

export default connect(mapState)(CartPromo);
