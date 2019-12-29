const setLookup = (data, product) => {
  if (product.availability) {
    Object.keys(product.availability).forEach((timeslotId) => {
      data[`${product.id}-${timeslotId}`] = product.availability[timeslotId];
    });
  }
  return data;
};

const forEachLookup = (products) => {
  const data = {};
  products.forEach((product) => { setLookup(data, product); });
  return data;
};

export default {
  setLookup,
  forEachLookup,
};
