import { combineReducers } from 'redux';
import types from './types';

// stores the search term
const referralsReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_REFERRALS: return action.payload;

    case types.ADD_REFERRALS: {
      const referrals = [...state];
      action.payload.forEach((referral) => {
        const index = referrals.findIndex(ref => (ref.token === referral.token));
        index >= 0 ? referrals[index] = referral : referrals.push(referral); // eslint-disable-line
      });
      return referrals;
    }

    default: return state;
  }
};

const referralReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_REFERRAL: return action.payload;
    default: return state;
  }
};

export default combineReducers({
  referrals: referralsReducer,
  referral: referralReducer,
});
