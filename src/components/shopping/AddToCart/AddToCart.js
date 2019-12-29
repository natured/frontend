import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../../ducks/auth';
import { cartSelectors } from '../../../ducks/cart';
import { accountSelectors } from '../../../ducks/account';
import AddToCartOptions from './AddToCartOptions/AddToCartOptions';
import EmptyButton from './AddToCartOptions/EmptyButton';
import LoginButton from './AddToCartOptions/LoginButton';
import UnavailableButton from './AddToCartOptions/UnavailableButton';
import './addToCart.scss';

class AddToCart extends React.Component {
  render() {
    // if product wasnt passed, dont show anything
    if (!this.props.product) { return <EmptyButton />; }

    // if hidden in market, don't show anything
    if (!this.props.product.show) { return <UnavailableButton />; }

    // if not sure if we have a logged in user
    if (!this.props.checkedForUser) { return <EmptyButton />; }

    // if theres no user, prompt them to login
    if (!this.props.isLoggedIn) { return <LoginButton />; }

    // if not sure if we have fetched the cart yet
    if (!this.props.checkedForCart) { return <EmptyButton />; }

    const { children, ...props } = this.props;
    return <AddToCartOptions {...props}>{children}</AddToCartOptions>;
  }
}

const mapState = ({ auth, cart, account }) => ({
  checkedForUser: authSelectors.checkedForUser(auth),
  isLoggedIn: authSelectors.isLoggedIn(auth),
  checkedForCart: cartSelectors.checkedForCart(cart),
  showWalkthrough: accountSelectors.showWalkthrough(account),
});

export default connect(mapState)(AddToCart);
