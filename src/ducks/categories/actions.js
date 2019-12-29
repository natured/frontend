import types from './types';


const getParentCategories = () => async (dispatch, getState, api) => {
  const res = await api.get('/catalog/categories/parents');
  dispatch({ type: types.GET_PARENT_CATEGORIES, payload: { parents: res.data } });
};

const getTimeslot = () => async (dispatch, getState, api) => {
  const res = await api.get('/cart/timeslots/default');
  dispatch({ type: types.GET_TIMESLOT, payload: res.data });
};

export default {
  getParentCategories,
  getTimeslot,
};
