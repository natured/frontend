import types from './types';

// fetches parent categories
const getParentCategories = () => async (dispatch, getState, api) => {
  const res = await api.get('/catalog/categories/parents');
  dispatch({ type: types.GET_PARENT_CATEGORIES, payload: res.data });
};

const getCategoryBySlug = ({ slug }) => async (dispatch, getState, api) => {
  const res = await api.get(`/catalog/categories/bySlug/${slug}`);
  dispatch({ type: types.GET_CATEGORY_BY_SLUG, payload: res.data });
};


export default {
  getParentCategories,
  getCategoryBySlug,
};
