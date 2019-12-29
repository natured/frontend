const storeProductBySlugs = (data, product) => {
  data[`${product.foodmaker.slug}-${product.slug}`] = product;
  return data;
};

export default {
  storeProductBySlugs,
};
