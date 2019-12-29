import types from './types';

// retrieves a foodmaker by its slug
const getFoodmakerBySlug = foodmaker => async (dispatch, getState, api) => {
  const res = await api.get(`/catalog/foodmakers/bySlug/${foodmaker}`);
  dispatch({ type: types.GET_FOODMAKER, payload: res.data });
};

// retrieves a foodmaker by its slug
const getFoodmakerById = foodmakerId => async (dispatch, getState, api) => {
  try {
    const res = await api.get(`/v2/catalog/foodmakers/${foodmakerId}`);
    dispatch({ type: types.GET_FOODMAKER_BY_ID, payload: { foodmakerId, foodmaker: res.data } });
  } catch (err) {
    dispatch({ type: types.GET_FOODMAKER_BY_ID, payload: { foodmakerId, foodmaker: 'error' } });
  }
};

const trackFoodmakerView = foodmakerId => async (dispatch, getState, api) => {
  await api.get(`/v2/catalog/metrics/track/foodmaker/${foodmakerId}`);
};

export default {
  getFoodmakerBySlug,
  getFoodmakerById,
  trackFoodmakerView,
};
