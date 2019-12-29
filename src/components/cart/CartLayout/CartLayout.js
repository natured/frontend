import React from 'react';
import CheckAuth from '../../auth/AuthHelpers/CheckAuth';
import ShopCategoriesSection from '../../static/HomeSections/ShopCategoriesSection';
import CartHeader from '../CartHeader/CartHeader';
import CartItemsSection from '../CartItems/CartItemsSection';
import CartDetails from '../CartDetails/CartDetails';
import EmptyCart from '../EmptyCart/EmptyCart';
import './cartLayout.scss';

class CartLayout extends React.Component {
  render() {
    return (
      <CheckAuth>
        <div className="page-content cart--page">
          <div className="cart-left">
            <CartHeader />
            <CartItemsSection />
          </div>
          <div className="cart-right">
            <CartDetails />
          </div>
        </div>
        <div className="page-content cart--page">
          <div className="">
            <CartHeader />
            <EmptyCart login={false} />
            <hr />
            <ShopCategoriesSection />
          </div>
        </div>
      </CheckAuth>
    );
  }
}

export default CartLayout;
