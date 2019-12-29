import types from './types';

const getRecentlyAdded = page => async (dispatch, getState, api) => {
  const res = await api.get(`/v2/catalog/products/recently-added?page=${page}`);
  return res.data;
};

const getProductSections = () => async (dispatch, getState, api) => {
  const res = await api.get('/v2/catalog/sections');
  return res.data;
};

const getProductBySlugs = (product, foodmaker) => async (dispatch, getState, api) => {
  const res = await api.get(`/v2/catalog/products/${foodmaker}/${product}`);
  dispatch({ type: types.GET_PRODUCT, payload: res.data });
};

const getProductById = productId => async (dispatch, getState, api) => {
  try {
    const res = await api.get(`/v2/catalog/products/${productId}`);
    dispatch({ type: types.GET_PRODUCT_BY_ID, payload: { productId, product: res.data } });
  } catch (err) {
    dispatch({ type: types.GET_PRODUCT_BY_ID, payload: { productId, product: 'error' } });
  }
};

const getProductsForFoodmaker = foodmakerId => async (dispatch, getState, api) => {
  const res = await api.get(`/v2/catalog/products/byFoodmaker/${foodmakerId}?show=true`);
  return res.data; // send results straight back
};

const getAddByForProduct = (productId, data) => async (dispatch, getState, api) => {
  const res = await api.post(`/v2/capacities/settings/${productId}/guaranteed`, data);
  dispatch({ type: types.GET_PRODUCT_ADD_BY, payload: { productId, addBy: res.data } });
};

const trackProductView = productId => async (dispatch, getState, api) => {
  await api.get(`/v2/catalog/metrics/track/product/${productId}`);
};

export default {
  getRecentlyAdded,
  getProductSections,
  getProductBySlugs,
  getProductById,
  getProductsForFoodmaker,
  getAddByForProduct,
  trackProductView,
};
