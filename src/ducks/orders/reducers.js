import { combineReducers } from 'redux';
import types from './types';

const initialTable = { page: null, pages: null, total: null };
const tableReducer = (state = initialTable, action) => {
  switch (action.type) {
    case types.UPDATE_ORDER_PAGES: {
      const { pages, total } = action.payload;
      const page = Number(action.payload.page);
      return { ...state, page, pages, total };
    }

    default: return state;
  }
};

// stores order ids by page
const ordersByPageReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ORDERS_FOR_PAGE: {
      const orders = action.payload.orders.map(order => order.id);
      return { ...state, [action.payload.page]: orders };
    }

    default: return state;
  }
};

// stores orders by id
const ordersByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ORDERS_FOR_PAGE: {
      const orders = { ...state.orders };
      action.payload.orders.forEach((order) => { orders[order.id] = order; });
      return orders;
    }

    default: return state;
  }
};

export default combineReducers({
  table: tableReducer,
  ordersByPage: ordersByPageReducer,
  ordersById: ordersByIdReducer,
});
