import { combineReducers } from 'redux';
import types from './types';

/* State Shape
{
  account: account object,
}
*/

// billing controller
const billingReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_PAYMENT_METHODS: return { cards: action.payload };
    case types.CLEAR_ACCOUNT: return null;
    default: return state;
  }
};

const accountReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT: return action.payload;
    case types.CLEAR_ACCOUNT: return null;
    default: return state;
  }
};

// stores account notification preferences
const notificationsReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT: return action.payload.notifications;
    case types.UPDATE_NOTIFICATION: {
      return { ...state, [action.payload.type]: action.payload.value };
    }
    case types.CLEAR_ACCOUNT: return null;
    default: return state;
  }
};


// stores just the contact info
const contactReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT: {
      return {
        first: action.payload.contact.first,
        last: action.payload.contact.last,
        phone: action.payload.contact.phone,
        phoneValidated: action.payload.contact.validated,
        email: action.payload.user.email,
        emailValidated: action.payload.user.emailValidated,
      };
    }
    case types.UPDATE_ACCOUNT_CONTACT: {
      return { ...state, ...action.payload };
    }
    case types.EMAIL_VALIDATED: {
      return { ...state, emailValidated: true };
    }
    case types.CLEAR_ACCOUNT: return null;
    default: return state;
  }
};

const deliveryReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT: {
      return action.payload.address || {};
    }
    case types.UPDATE_ACCOUNT_ADDRESS: { return action.payload; }
    case types.CLEAR_ACCOUNT: return {};
    default: return state;
  }
};

// determines whether we need to show the walkthrough
const walkthroughReducer = (state = null, action) => {
  switch (action.type) {
    // case when fetching user, check to see if its already set on the user
    case types.CHECK_WALKTHROUGH: { return action.payload; }
    case types.CLEAR_ACCOUNT: return null;
    default: return state;
  }
};

const reducer = combineReducers({
  account: accountReducer,
  billing: billingReducer,
  contact: contactReducer,
  delivery: deliveryReducer,
  notifications: notificationsReducer,
  walkthrough: walkthroughReducer,
});

export default reducer;
