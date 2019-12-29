import { combineReducers } from 'redux';
import types from './types';

// stores a promo code for the user to use
const codeReducer = (state = false, action) => {
  switch (action.type) {
    case types.STORE_PROMO_CODE: return action.payload;
    default: return state;
  }
};

export default combineReducers({
  code: codeReducer,
});
