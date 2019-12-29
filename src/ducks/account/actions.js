import types from './types';

const getAccount = () => async (dispatch, getState, api) => {
  const { user } = getState().auth;
  const res = await api.get(`/v2/account/accounts/byUser/${user.id}`);
  dispatch({ type: types.GET_ACCOUNT, payload: { ...res.data, user } });
};

const resendEmailConfirmation = () => async (dispatch, getState, api) => {
  await api.post('/v2/users/resend-confirmation', { userId: getState().auth.user.id });
  return true;
};

// confirms a users email
const confirmEmail = token => async (dispatch, getState, api) => {
  try {
    await api.post('/v2/users/confirm-email', { token });
    dispatch({ type: types.UPDATE_ACCOUNT_CONTACT, payload: { emailValidated: true } });
    // Analytics.track('CONFIRMED_EMAIL');
    return { success: true };
  } catch (error) { return { success: false, ...error }; }
};

// updates a users name
const updateName = (first, last) => async (dispatch, getState, api) => {
  try {
    const userId = getState().auth.user.id;
    const res = await api.post(`v2/account/${userId}/name`, { first, last });
    dispatch({ type: types.UPDATE_ACCOUNT_CONTACT, payload: res.data.contact });
    // Analytics.track('UPDATED_NAME', { first, last });
    return { success: true };
  } catch (error) { return { success: false, ...error }; }
};

const updatePhone = phone => async (dispatch, getState, api) => {
  try {
    const userId = getState().auth.user.id;
    const res = await api.put(
      `v2/account/contact/${userId}/verify-phone`,
      { number: phone.replace(/ /g, '').replace('+1', '') },
    );

    dispatch({
      type: types.UPDATE_ACCOUNT_CONTACT,
      payload: { phone: res.data.contact.phone, phoneValidated: false },
    });

    // Analytics.track('UPDATED_PHONE_NUMBER', { phone });

    return true;
  } catch (error) { return { success: false, ...error }; }
};

// resends a code to number on file
const resendPhoneCode = () => async (dispatch, getState, api) => {
  try {
    const userId = getState().auth.user.id;
    await api.get(`v2/account/contact/${userId}/verify-phone`);
    return true;
  } catch (error) { return { success: false, ...error }; }
};

// checks a 4 digit code
const checkPhoneCode = token => async (dispatch, getState, api) => {
  try {
    const userId = getState().auth.user.id;
    await api.post(`v2/account/contact/${userId}/verify-phone`, { token });
    dispatch({ type: types.UPDATE_ACCOUNT_CONTACT, payload: { phoneValidated: true } });
    // Analytics.track('VALIDATED_PHONE_NUMBER');
    return { success: true };
  } catch (error) { return { success: false, ...error }; }
};

// updates the current users address
const updateAddress = address => async (dispatch, getState, api) => {
  try {
    const userId = getState().auth.user.id;
    const res = await api.post(`/v2/account/delivery/${userId}`, { ...address, user: userId });
    // Analytics.track('UPDATED_ADDRESS', address);

    dispatch({ type: types.UPDATE_ACCOUNT_ADDRESS, payload: res.data.address });
    return { success: true };
  } catch (error) { return { success: false, ...error }; }
};

// toggles a preference of a notification
const toggleNotification = (type, value) => async (dispatch, getState, api) => {
  try {
    dispatch({ type: types.UPDATE_NOTIFICATION, payload: { type, value } });
    const userId = getState().auth.user.id;
    const res = await api.get(`/v2/account/notifications/${userId}/${type}/${value}`);
    const payload = { value: res.data.notifications[type], type };
    dispatch({ type: types.UPDATE_NOTIFICATION, payload });
  } catch (error) { return { success: false, ...error }; }
};

// toggles a preference of a notification
const checkWalkthrough = userId => async (dispatch, getState, api) => {
  const res = await api.get(`/v2/users/${userId}/show-walkthrough`);
  dispatch({ type: types.CHECK_WALKTHROUGH, payload: res.data });
};

const completeWalkthrough = () => ({ type: types.CHECK_WALKTHROUGH, payload: false });

const getBilling = () => async (dispatch, getState, api) => {
  const userId = getState().auth.user.id;
  const res = await api.get(`/v2/billing/cards/byUser/${userId}`);
  dispatch({ type: types.GET_PAYMENT_METHODS, payload: res.data });
};

// adds a new payment method
const addPayment = (token, cardholder) => async (dispatch, getState, api) => {
  try {
    const userId = getState().auth.user.id;
    const res = await api.post(`/v2/billing/cards/${userId}`, { cardholder, token });
    dispatch({ type: types.GET_PAYMENT_METHODS, payload: res.data });

    // const { last4, brand } = res.data[0];
    // Analytics.track('UPDATED_PAYMENT', { last4, brand });
    return { success: true };
  } catch (error) { // handles stripe errors
    return { success: false, errorMessage: error.response.data.message };
  }
};

// makes a payment method the default
const makeDefaultPayment = cardId => async (dispatch, getState, api) => {
  const userId = getState().auth.user.id;
  const res = await api.post(`/v2/billing/cards/default/${userId}`, { cardId });
  dispatch({ type: types.GET_PAYMENT_METHODS, payload: res.data });
  return true;
};

// removes a payment method
const removePayment = cardId => async (dispatch, getState, api) => {
  const userId = getState().auth.user.id;
  const res = await api.delete(`/v2/billing/cards/${userId}/${cardId}`);
  dispatch({ type: types.GET_PAYMENT_METHODS, payload: res.data });
};

const clearAccount = () => ({
  type: types.CLEAR_ACCOUNT,
});

export default {
  getAccount,
  clearAccount,
  resendEmailConfirmation,
  confirmEmail,
  updateName,
  updatePhone,
  resendPhoneCode,
  checkPhoneCode,
  updateAddress,
  toggleNotification,
  checkWalkthrough,
  getBilling,
  addPayment,
  removePayment,
  makeDefaultPayment,
  completeWalkthrough,
};
