import types from './types';

// const setKeys = keys => ({ type: types.SET_KEYS, payload: keys });

const toggleModal = (name, value, extra = null) => ({
  type: types.TOGGLE_MODAL, payload: { name, value, extra },
});

const zipCheck = (requestedZip, data) => async (dispatch, getState, api) => {
  const res = await api.post('/delivery/zip', { zip: requestedZip });

  // const { deliver, name, zip } = res.data.area;
  // const { page, email } = data;
  // Analytics.track('CHECKED_ZIP_CODE', { deliver, name, zip, page, email });
  return res.data;
};

const deliveryRequest = (zip, email) => async (dispatch, getState, api) => {
  // Analytics.track('REQUESTED_ZIP_CODE', { zip, email });
  await api.post('/delivery/check', { zip, email });
};

export default {
  toggleModal,
  zipCheck,
  deliveryRequest,
};
