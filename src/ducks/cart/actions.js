import types from './types';
// import { Cart } from '../../services/Analytics';
import { shoppingSelectors } from '../shopping';
import { authSelectors } from '../auth';
import { promosOperations } from '../promos';

// fetches the cart from a user and timeslot
const fetchCart = (userId, timeslotId) => async (dispatch, getState, api) => (
  (await api.get(`/v2/cart/${timeslotId}/${userId}`)).data
);

// fetches default cart using current shopping timeslot
const fetchDefaultCart = userId => async (dispatch, getState, api) => {
  const timeslotId = shoppingSelectors.getTimeslotId(getState().shopping);
  return (await api.get(`/v2/cart/${timeslotId}/${userId}`)).data;
};

// adds/updates a product in the cart
const addToCart = (productId, quantity) => async (dispatch, getState, api) => {
  const userId = authSelectors.getUserId(getState().auth);
  const res = await api.post('/v2/cart/add-to-cart', {
    timeslotId: shoppingSelectors.getTimeslotId(getState().shopping),
    userId,
    productId,
    quantity,
  });

  // Cart.track('ADD_TO_CART', { productId, quantity, cart: res.data });
  dispatch({ type: types.GET_CART, payload: res.data });
  return true;
};

// adds a code to the current cart
const applyCode = code => async (dispatch, getState, api) => {
  try {
    const cartId = getState().cart.cart.id;
    const res = await api.post('/cart/applyDiscount', { cartId, code });
    dispatch({ type: types.GET_CART, payload: res.data });
    return { success: true };
  } catch (error) {
    dispatch(promosOperations.removePromoCode());
    return { success: false, errors: { code: error.response.data.message } };
  }
};

// removes a code from the current cart
const removeCode = () => async (dispatch, getState, api) => {
  const cartId = getState().cart.cart.id;
  const res = await api.post('/cart/removeDiscount', { cartId });
  dispatch({ type: types.GET_CART, payload: res.data });
  dispatch(promosOperations.removePromoCode());
};

const clearCart = () => ({
  type: types.CLEAR_CART,
});

export default {
  fetchCart,
  fetchDefaultCart,
  addToCart,
  applyCode,
  removeCode,
  clearCart,
};
