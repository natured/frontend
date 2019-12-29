import types from './types';


// Handles fetching of recently added products
const getRecentlyAdded = page => async (dispatch, getState, api) => {
  const res = await api.get(`/catalog/products/recently-added?page=${page}`);

  dispatch({
    type: types.GET_RECENTLY_ADDED_PRODUCTS,
    payload: { products: res.data, page },
  });

  return { success: true, data: res.data };
};

// Gets products by category
const getProductsForCategory = categorySlug => async (dispatch, getState, api) => {
  const res = await api.get(`/catalog/products/byCategory/${categorySlug}`);

  dispatch({
    type: types.GET_CATEGORY_PRODUCTS,
    payload: { categorySlug, products: res.data },
  });
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
  getProductsForCategory,

  getProductBySlugs,
  getProductById,
  getProductsForFoodmaker,
  getAddByForProduct,
  trackProductView,
};
