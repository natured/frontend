import { combineReducers } from 'redux';
import types from './types';

const bySlugReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_FOODMAKER: {
      const foodmaker = action.payload;
      return { ...state, [foodmaker.slug]: foodmaker };
    }

    default: return state;
  }
};

const byIdReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_FOODMAKER_BY_ID: {
      return { ...state, [action.payload.foodmakerId]: action.payload.foodmaker };
    }

    default: return state;
  }
};

/**
 * state looks like...
 *   {
 *     'bySlug': {
 *       'feather-brook-farm': Foodmaker object,
 *       ....
 *     }
 *   }
 */
export default combineReducers({
  bySlug: bySlugReducer,
  byId: byIdReducer,
});
