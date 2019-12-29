import { combineReducers } from 'redux';
import { categoriesTypes } from '../categories';
import types from './types';
import utils from './utils';

const recentlyAddedReducer = (state = {
  productsByPage: {},
  page: 1,
}, action) => {
  switch (action.type) {

    case types.GET_RECENTLY_ADDED_PRODUCTS: {
      // Creates new products by page object
      const { page, products } = action.payload;
      const productsByPage = { ...state.productsByPage, [page]: products };

      // Updates state with new products by page and the current page
      return { ...state, productsByPage, page };
    }

    default: return state;
  }
};

const byCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_PRODUCTS:
      return { ...state, [action.payload.categorySlug]: action.payload.products };

    default: return state;
  }
}

const byIdReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_BY_ID: {
      return { ...state, [action.payload.productId]: action.payload.product };
    }
    default: return state;
  }
};

const bySlugsReducer = (state = {}, action) => {
  switch (action.type) {
    // case types.GET_RECENTLY_ADDED_PRODUCTS: {
    //   const data = {};
    //   action.payload.forEach((product) => {
    //     utils.storeProductBySlugs(data, product);
    //   });
    //   return { ...state, ...data };
    // }

    case types.GET_PRODUCT: {
      const data = utils.storeProductBySlugs({}, action.payload);
      return { ...state, ...data };
    }

    case categoriesTypes.GET_PRODUCTS_BY_CATEGORY: {
      const data = {};
      action.payload.products.forEach((product) => {
        utils.storeProductBySlugs(data, product);
      });
      return { ...state, ...data };
    }
    default: return state;
  }
};

// stores the add by information by product id
const addByReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_ADD_BY: {
      const { productId, addBy } = action.payload;
      return { ...state, [productId]: addBy };
    }

    default: return state;
  }
};

export default combineReducers({
  recentlyAdded: recentlyAddedReducer,
  byCategory: byCategoryReducer,
});
