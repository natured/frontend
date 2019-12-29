import actions from './actions';

export default {
  getAccount: actions.getAccount,
  resendEmailConfirmation: actions.resendEmailConfirmation,
  confirmEmail: actions.confirmEmail,
  updateName: actions.updateName,
  updatePhone: actions.updatePhone,
  resendPhoneCode: actions.resendPhoneCode,
  checkPhoneCode: actions.checkPhoneCode,
  clearAccount: actions.clearAccount,
  updateAddress: actions.updateAddress,
  toggleNotification: actions.toggleNotification,
  checkWalkthrough: actions.checkWalkthrough,
  completeWalkthrough: actions.completeWalkthrough,
  getBilling: actions.getBilling,
  addPayment: actions.addPayment,
  removePayment: actions.removePayment,
  makeDefaultPayment: actions.makeDefaultPayment,
};
