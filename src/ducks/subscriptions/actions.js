import types from './types';
import { cartOperations } from '../cart';

// getUserSubscriptions retrieves the authenticated user's subscriptions
const getSubscriptions = () => async (dispatch, getState, api) => {
  const { user } = getState().auth;
  if (user) { // only fetch if authenticated user
    const res = await api.get(`/v2/subscriptions/byUser/${user.id}`);
    dispatch({ type: types.GET_SUBSCRIPTIONS, payload: res.data });
  }
};

// subscribe subscribes us to a product in a specific qty
const subscribe = (productId, quantity) => async (dispatch, getState, api) => {
  const { auth, shopping } = getState();

  // only fetch if authenticated user and timeslot set
  if (auth.user && shopping.timeslot) {
    const res = await api.post('/v2/subscriptions', {
      productId,
      quantity,
      timeslotId: shopping.timeslot.id || shopping.timeslot._id, //eslint-disable-line
      userId: auth.user.id,
    });

    dispatch({ type: types.UPDATE_SUBSCRIPTION, payload: res.data.subscription });
    if (res.data.filled) { dispatch(cartOperations.fetchDefaultCart()); }
  }
};

// updateSubscription handles updating a subscription by id
const updateSubscription = (subscriptionId, quantity) => async (dispatch, getState, api) => {
  const { auth } = getState();

  // only fetch if authenticated user and timeslot set
  const res = await api.post(`/v2/subscriptions/${subscriptionId}`, {
    quantity, period: 1, userId: auth.user.id,
  });

  dispatch({ type: types.UPDATE_SUBSCRIPTION, payload: res.data });

  return true;
};

export default {
  getSubscriptions,
  subscribe,
  updateSubscription,
};
