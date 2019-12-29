import types from './types';

const getSections = () => async (dispatch, getState, api) => {
  const res = await api.get('/catalog/sections');
  dispatch({ type: types.GET_SECTIONS, payload: res.data });
};

export default {
  getSections,
};
