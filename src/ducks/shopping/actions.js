import types from './types';

const getTimeslot = () => async (dispatch, getState, api) => {
  // const res = await api.get('/cart/timeslots/default');
  // dispatch({ type: types.GET_TIMESLOT, payload: res.data });
};

const getTimeslots = () => async (dispatch, getState, api) => {
  const res = await api.get('/cart/timeslots/upcoming');
  dispatch({ type: types.GET_TIMESLOTS, payload: res.data });
};

export default {
  getTimeslot,
  getTimeslots,
};
