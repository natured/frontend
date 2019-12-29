import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Link } from '../../../elements';
import CartIcon from '../../../cart/CartIcon/CartIcon';
import { authSelectors } from '../../../../ducks/auth';
import { shoppingOperations, shoppingSelectors } from '../../../../ducks/shopping';
import { cartOperations, cartSelectors } from '../../../../ducks/cart';

class CartToggle extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn && this.props.timeslotId) {
      this.props.fetchCart(this.props.userId, this.props.timeslotId);
    }
  }

  render() {
    return (
      <div className="cart--toggle">
        <Link to="CART">
          <Badge count={this.props.count}>
            <CartIcon />
          </Badge>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, shopping, cart }) => ({
  isLoggedIn: authSelectors.isLoggedIn(auth),
  userId: authSelectors.getUserId(auth),
  timeslotId: shoppingSelectors.getTimeslotId(shopping),
  count: cartSelectors.getCount(cart),
});

const mapDispatchToProps = {
  fetchCart: cartOperations.fetchCart,
  fetchTimeslot: shoppingOperations.fetchTimeslot,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartToggle);
