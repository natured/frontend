import { combineReducers } from 'redux';
import types from './types';

/**
 * Stores the user
 *   - If not yet fetched, state is null
 *   - If fetched but not logged in, state is false
 *   - If logged in, state is the user object
 */
const userReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_USER: return action.payload;
    case types.LOGIN_USER: return action.payload;
    case types.LOGOUT_USER: return false;
    default: return state;
  }
};


export default combineReducers({
  user: userReducer,
});
