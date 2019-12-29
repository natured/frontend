import actions from './actions';
import types from './types';
// import { promosOperations } from '../promos';

// handles storing the cart and checking for local promo codes to apply
const handleCart = cart => async (dispatch, getState) => {
  dispatch({ type: types.GET_CART, payload: cart });

  if (getState().promos.code) { // attempts to apply the promo code from storage
    dispatch(actions.applyCode(getState().promos.code));
  }
};

const fetchCart = (userId, timeslotId) => async (dispatch) => {
  const cart = await dispatch(actions.fetchCart(userId, timeslotId));
  dispatch(handleCart(cart));
};

// fetches default cart using current shopping timeslot
const fetchDefaultCart = () => async (dispatch, getState) => {
  const userId = getState().auth.user.id;
  const cart = await dispatch(actions.fetchDefaultCart(userId));
  dispatch(handleCart(cart));
};


export default {
  addToCart: actions.addToCart,
  fetchCart,
  fetchDefaultCart,
  clearCart: actions.clearCart,
  applyCode: actions.applyCode,
  removeCode: actions.removeCode,
};
