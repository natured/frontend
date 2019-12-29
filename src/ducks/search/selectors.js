// gets product results off of the search state
const getProductHits = ({ results }) => (
  results.products ? results.products.hits : []
);

export default {
  getProductHits,
};
