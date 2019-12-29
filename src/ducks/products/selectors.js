// given products and the match params, returns the product
function lookupByMatch({ bySlugs }, { foodmaker, product }) {
  return bySlugs[`${foodmaker}-${product}`] || null;
}

const lookupById = ({ byId }, productId) => (
  productId in byId ? byId[productId] : 'loading'
);

const getAddBy = ({ addBy }, product) => (
  product && product.id in addBy ? addBy[product.id] : null
);

export default {
  lookupByMatch,
  lookupById,
  getAddBy,
};
