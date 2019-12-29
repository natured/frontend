import types from './types';

// checks for a logged in use
const getUser = () => async (dispatch, getState, api) => {
  const response = await api.get('/v2/session/user');
  dispatch({ type: types.GET_USER, payload: response.data });
  // if (response.data) { Analytics.identify(response.data); }
  return response.data;
};

const storeUser = user => ({ type: types.LOGIN_USER, payload: user });

// logs a user in
const login = (email, password) => async (dispatch, getState, api) => {
  try {
    const response = await api.post('/v2/session/login', { email, password });
    //
    // if (response.data) {
    //   Analytics.identify(response.data);
    //   Analytics.track('LOGIN');
    // }

    return { success: true, user: response.data };
  } catch (error) {
    const errorMessage = 'Whoops! Your credentials are not valid.';
    return { success: false, errors: { password: errorMessage } };
  }
};

const register = data => async (dispatch, getState, api) => {
  try {
    const { referral } = getState().referrals;
    const referralId = referral ? referral.id : null;
    const res = await api.post('/v2/session/register', { ...data, referralId });

    // if (res.data) {
    //   const { first, last, email, zip } = data;
    //   Analytics.track('REGISTER', { first, last, email, zip });
    //   Analytics.identify(res.data);
    // }

    return { success: true, user: res.data };
  } catch (error) { // put error message as message
    return { success: false, errors: { email: error.response.data.message } };
  }
};

// logs a user out
const logout = () => async (dispatch, getState, api) => {
  try {
    await api.get('/v2/session/logout');
    dispatch({ type: types.LOGOUT_USER });
    // Analytics.track('LOGOUT');
    // Analytics.unidentify();
    return { success: true };
  } catch (error) { return { success: false }; }
};

// validates the reset token
const validateResetToken = token => async (dispatch, getState, api) => {
  try {
    await api.post('/auth/validate-token', { token });
    return true;
  } catch (error) { return false; }
};

// attempts to reset a password
const resetPassword = params => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post('/v2/session/reset-password', params);
    return { success: true, user: data };
  } catch (error) { return false; }
};

export default {
  getUser,
  register,
  login,
  logout,
  storeUser,
  validateResetToken,
  resetPassword,
};
