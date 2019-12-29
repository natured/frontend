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


export default {
// 
};
