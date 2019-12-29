import { combineReducers } from 'redux';
import types from './types';

/**
 * Stores availability by product id
 *   - Anytime we fetch products or get updated availability
 *   - We update it and store it here
 */
const availabilityByProductReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_TIMESLOT: return action.payload;
    default: return state;
  }
};

const reducer = combineReducers({
  byProduct: availabilityByProductReducer,
});

export default reducer;
