import { combineReducers } from 'redux';
import types from './types';

// checks for whether subscriptions have been fetched
const foundSubscriptionsReducer = (state = false, action) => {
  switch (action.type) {
    case types.GET_SUBSCRIPTIONS: return true;
    default: return state;
  }
};

// stores a list of subscriptions
const subscriptionsReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_SUBSCRIPTIONS: return action.payload;

    // updates an individual subscription
    case types.UPDATE_SUBSCRIPTION: {
      const index = state.findIndex(subscription => (
        subscription.productId === action.payload.productId
      ));

      // if not found, just append
      if (index < 0) { return [...state, action.payload]; }

      // otherwise, overwrite subscription
      const subscriptions = [...state];
      subscriptions[index] = action.payload;
      return subscriptions;
    }

    default: return state;
  }
};

// stores subscriptions by product id
const subscriptionsByProductReducer = (state = {}, action) => {
  switch (action.type) {
    // when fetching all subscriptions, iterate and store by product
    case types.GET_SUBSCRIPTIONS: {
      const subscriptions = {};
      action.payload.forEach((subscription) => {
        subscriptions[subscription.productId] = subscription;
      });
      return { ...state, ...subscriptions };
    }

    case types.UPDATE_SUBSCRIPTION: {
      const subscription = action.payload;
      return { ...state, [subscription.productId]: subscription };
    }

    default: return state;
  }
};

export default combineReducers({
  found: foundSubscriptionsReducer,
  subscriptions: subscriptionsReducer,
  byProduct: subscriptionsByProductReducer,
});
