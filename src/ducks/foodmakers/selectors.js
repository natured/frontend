// given foodmakers state and the match params, returns the foodmaker
const lookupByMatch = ({ bySlug }, { foodmaker }) => (
  bySlug[foodmaker] || null
);

const lookupById = ({ byId }, foodmakerId) => (
  foodmakerId in byId ? byId[foodmakerId] : 'loading'
);

export default {
  lookupByMatch,
  lookupById,
};
