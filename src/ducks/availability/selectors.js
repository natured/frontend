// given availability, product id and timeslot, returns a qty or null
const getProductAvailability = ({ lookups }, productId, timeslotId) => {
  const quantity = lookups[`${productId}-${timeslotId}`];
  return typeof quantity == 'number' ? (quantity > 0 ? quantity : 0) : 'invalid'; // eslint-disable-line
};

export default {
  getProductAvailability,
};
