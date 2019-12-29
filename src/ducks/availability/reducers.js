import { combineReducers } from 'redux';
import { categoriesTypes } from '../categories';
import { productsTypes } from '../products';
import types from './types';
import utils from './utils';

const availabilityLookupsReducer = (state = {}, action) => {
  switch (action.type) {
    // whenever products fetched for display in categories
    case categoriesTypes.GET_PRODUCTS_BY_CATEGORY: {
      return { ...state, ...utils.forEachLookup(action.payload.products) };
    }

    // whenever products fetched for special reason
    case productsTypes.GET_RECENTLY_ADDED_PRODUCTS: {
      return { ...state, ...utils.forEachLookup(action.payload) };
    }

    // whenever we retrieve for a specific item
    case types.GET_PRODUCT_AVAILABILITY: {
      return { ...state, ...utils.setLookup({}, action.payload) };
    }

    case productsTypes.GET_PRODUCT_BY_ID: {
      return { ...state, ...utils.setLookup({}, action.payload.product) };
    }

    case productsTypes.GET_PRODUCT: {
      return { ...state, ...utils.setLookup({}, action.payload) };
    }

    default: return state;
  }
};

export default combineReducers({
  lookups: availabilityLookupsReducer,
});
