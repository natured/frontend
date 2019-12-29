import actions from './actions';
import { cartOperations } from '../cart';
import { accountOperations } from '../account';
import utils from './utils';

/**
 * storeUser handles successful login, registration, etc.
 * stores the user's token
 * retrieves their cart
 * checks whether the account walkthroguh is needed
 */
const saveUser = ({ success, user }) => async (dispatch, getState, api) => {
  if (success) {
    await window.localStorage.setItem('token', user.token);

    await dispatch(actions.storeUser(user));
    await dispatch(cartOperations.fetchDefaultCart(user.id));
    await dispatch(accountOperations.checkWalkthrough(user.id));
  }
};

/**
 * login attempts to login using email and password
 * stores the user if necessary
 * otherwise return the status
 */
const login = ({ email, password }) => async (dispatch) => {
  const status = await dispatch(actions.login(email, password));
  await dispatch(saveUser(status));
  return status;
};

// registers a new user
const register = data => async (dispatch) => {
  const status = await dispatch(actions.register(data));
  await dispatch(saveUser(status));
  return status;
};

/**
 * getUser attempts to find a user using API token
 * if there is one, make sure to double check for a walkthrough
 */
const getUser = () => async (dispatch) => {
  const result = await dispatch(actions.getUser());
  if (result) { await dispatch(accountOperations.checkWalkthrough(result.id)); }
};

// logs a user out
const logout = () => async (dispatch, getState, api) => {
  await dispatch(actions.logout());

  // removes jwt token
  utils.removeToken(api);

  // clear user specific data
  dispatch(cartOperations.clearCart());
  dispatch(accountOperations.clearAccount());
};

// resetPassword handles resetting a user's password
const resetPassword = data => async (dispatch) => {
  const status = await dispatch(actions.resetPassword(data));
  await dispatch(saveUser(status));
  return status.success;
};

export default {
  getUser,
  register,
  login,
  logout,
  validateResetToken: actions.validateResetToken,
  resetPassword,
};
