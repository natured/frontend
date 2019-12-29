import types from './types';

const getProductAvailability = productId => async (dispatch, getState, api) => {
  if (getState().auth.user) {
    const timeslotId = getState().shopping.timeslot.id;
    const res = await api.get(`/v2/catalog/products/${productId}/availability/${timeslotId}`);

    dispatch({
      type: types.GET_PRODUCT_AVAILABILITY,
      payload: { id: productId, availability: res.data },
    });
  }
};

const updateAvailability = ({ productId, availability }) => ({
  type: types.GET_PRODUCT_AVAILABILITY,
  payload: { id: productId, availability },
});

export default {
  updateAvailability,
  getProductAvailability,
};
