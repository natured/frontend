import actions from './actions';
import { cartOperations } from '../cart';
/**
 * storePromoCode stores a new promo code in local storage
 * once stored, attempts to apply to the cart
 */
const storePromoCode = code => async (dispatch, getState) => {
  if (getState().cart.cart) {
    const result = await dispatch(cartOperations.applyCode(code));
    if (result.success) {
      dispatch(actions.storePromoCode(code));
      return true;
    }
  } else {
    dispatch(actions.storePromoCode(code));
    return true;
  }
};

// /**
//  * checkForPromoCode looks for promo code in local storage
//  * if found, attempts to apply to the cart
//  */
// const checkForPromoCode = () => async (dispatch) => {
//   const code = await actions.checkForPromoCode;
//   // if (code) {
//   //   dispatch(actions.attemptToApplyCode(code));
//   // }
// };

export default {
  storePromoCode,
  checkForPromoCode: actions.checkForPromoCode,
  removePromoCode: actions.removePromoCode,
};
