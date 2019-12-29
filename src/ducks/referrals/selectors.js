// get number of referrals
const numberReferrals = ({ referrals }) => (
  referrals ? referrals.length : null
);

const pendingAmount = ({ referrals }) => {
  if (!referrals) { return 0; }

  const total = referrals.reduce((amt, referral) => (
    referral.ordered ? 0 : referral.referrer.amount + amt
  ), 0);

  return total / 100;
};

const redeemedAmount = ({ referrals }) => {
  if (!referrals) { return 0; }

  const total = referrals.reduce((amt, referral) => (
    referral.ordered ? referral.referrer.amount + amt : 0
  ), 0);

  return total / 100;
};

export default {
  numberReferrals,
  pendingAmount,
  redeemedAmount,
};
