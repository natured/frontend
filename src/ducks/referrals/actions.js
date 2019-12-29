import types from './types';

const getReferralByToken = token => async (dispatch, getState, api) => {
  const result = await api.get(`/v2/referrals/${token}`);
  dispatch({ type: types.GET_REFERRAL, payload: result.data || false });
};

const getReferrals = () => async (dispatch, getState, api) => {
  const userId = getState().auth.user.id;
  const result = await api.get(`/v2/referrals/byUser/${userId}`);
  dispatch({ type: types.GET_REFERRALS, payload: result.data });
};

// sends referrals to emails
const sendReferrals = emails => async (dispatch, getState, api) => {
  const result = await api.post('/v2/referrals/many', { emails });
  dispatch({ type: types.ADD_REFERRALS, payload: result.data });
  return true;
};

export default {
  getReferralByToken,
  getReferrals,
  sendReferrals,
};
