import { combineReducers } from 'redux';
import types from './types';


// Handles displaying parent categories
const parentsReducer = (state = null, action) => {
  switch (action.type) {

    case types.GET_PARENT_CATEGORIES: {
      return action.payload;
    }

    default: return state;
  }
};


export default combineReducers({
  parents: parentsReducer,
});
