import { combineReducers } from 'redux';
import types from './types';

// stores the search term
const termReducer = (state = '', action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_TERM: return action.payload;
    case types.CLEAR_SEARCH: return '';
    default: return state;
  }
};

// initial results (nothing!)
const initialResults = { products: null };

// stores search results
const resultsReducer = (state = initialResults, action) => {
  switch (action.type) {
    // stores search results by type (i.e. results.products)
    // we care about the total # of hits and the hits
    case types.UPDATE_SEARCH_RESULTS: {
      const { type, results: { nbHits, hits } } = action.payload;
      return { ...state, [type]: { totalHits: nbHits, hits } };
    }
    // back to the beginning...
    case types.CLEAR_SEARCH: { return initialResults; }
    default: return state;
  }
};

export default combineReducers({
  term: termReducer,
  results: resultsReducer,
});
