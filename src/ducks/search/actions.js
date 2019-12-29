import types from './types';

// updates search term and performs updated search
const updateSearch = (term, algolia) => async (dispatch) => {
  // updates the term
  dispatch({ type: types.UPDATE_SEARCH_TERM, payload: term });

  // fetches new results and stores them
  const results = await algolia.products.search(term);
  dispatch({
    type: types.UPDATE_SEARCH_RESULTS,
    payload: { type: 'products', results },
  });
};

// clears the search entirely
const clearSearch = () => ({ type: types.CLEAR_SEARCH });

export default {
  updateSearch,
  clearSearch,
};
