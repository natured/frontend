import { combineReducers } from 'redux';
import types from './types';

/**
 * Stores shopping timeslot
 * @param  {[type]} [state=null] [description]
 * @param  {[type]} action       [description]
 * @return {[type]}              [description]
 */
const timeslotReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_TIMESLOT: return action.payload;
    default: return state;
  }
};

const timeslotsReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_TIMESLOTS: return action.payload;
    default: return state;
  }
};

const reducer = combineReducers({
  timeslot: timeslotReducer,
  timeslots: timeslotsReducer,
});

export default reducer;
