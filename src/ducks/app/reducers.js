import { combineReducers } from 'redux';
import types from './types';

// stores status of modals
const modalsReducer = (state = {}, action) => {
  switch (action.type) {
    // whenever products fetched for display in categories
    case types.TOGGLE_MODAL: {
      const { name, value, extra } = action.payload;

      // if (name === 'walkthrough' && !value) {
      //   Analytics.track('CLOSES_ACCOUNT_MODAL');
      // }

      return { ...state, [name]: { show: value, data: extra } };
    }

    default: return state;
  }
};

// stores app keys
const keysReducer = (state = {}, action) => {
  switch (action.type) {
    default: return state;
  }
};

// stores environment settings
const environmentReducer = (state = {}, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default combineReducers({
  env: environmentReducer,
  modals: modalsReducer,
  keys: keysReducer,
});
