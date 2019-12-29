import types from './types';

// handles storage of local promo code
const storePromoCode = code => (dispatch) => {
  // stores a promo code in local storage
  window.localStorage.setItem('activePromo', code);
  dispatch({ type: types.STORE_PROMO_CODE, payload: code });
  return code;
};

// checks for a promo code
const checkForPromoCode = () => async (dispatch) => {
  // checks for promo code in local storage
  if (window.localStorage) {
    const code = window.localStorage.getItem('activePromo');

    // if so, store it in state
    if (code) {
      dispatch({ type: types.STORE_PROMO_CODE, payload: code });
      return code;
    }
  }
};

// removes a promo code
const removePromoCode = () => (dispatch) => {
  // stores a promo code in local storage
  window.localStorage.removeItem('activePromo');
  dispatch({ type: types.STORE_PROMO_CODE, payload: false });
};

export default {
  storePromoCode,
  checkForPromoCode,
  removePromoCode,
};
