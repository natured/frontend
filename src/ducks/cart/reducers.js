import { combineReducers } from 'redux';
import types from './types';

/* State Shape
{
  cart: cart object,
  byProduct: {
    productId: item, ....
  },
}
*/

const cartReducer = (state = false, action) => {
  switch (action.type) {
    case types.GET_CART: return action.payload;
    case types.CLEAR_CART: return false;
    default: return state;
  }
};


const countReducer = (state = 0, action) => {
  switch (action.type) {
    case types.GET_CART: return action.payload.count;
    case types.CLEAR_CART: return 0;
    default: return state;
  }
};

const byProductReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CART: {
      const byProduct = {};
      action.payload.items.forEach((item) => {
        byProduct[item.product.id] = item; //eslint-disable-line
      });
      return byProduct;
    }

    case types.CLEAR_CART: return {};
    default: return state;
  }
};

const reducer = combineReducers({
  cart: cartReducer,
  byProduct: byProductReducer,
  count: countReducer,
});

export default reducer;
