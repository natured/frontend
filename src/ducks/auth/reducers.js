import { combineReducers } from 'redux';
import types from './types';

/**
 * Stores the user
 *   - If not yet fetched, state is null
 *   - If fetched but not logged in, state is false
 *   - If logged in, state is the user object
 */
const userReducer = (state = false, action) => {
  switch (action.type) {
    default: return false;
  }
};


export default combineReducers({
  user: userReducer,
});
