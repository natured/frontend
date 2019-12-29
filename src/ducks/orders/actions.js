import types from './types';

const getOrders = (getPage = 1) => async (dispatch, getState, api) => {
  const { user } = getState().auth;
  const res = await api.get(`/v2/orders/byUser/${user.id}?page=${getPage}`);
  const { docs, page, pages, total } = res.data;
  dispatch({ type: types.GET_ORDERS_FOR_PAGE, payload: { page, orders: docs } });
  dispatch({ type: types.UPDATE_ORDER_PAGES, payload: { page, pages, total } });
  return true;
};

export default {
  getOrders,
};
