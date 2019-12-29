import actions from './actions';

export default {
  getRecentlyAdded: actions.getRecentlyAdded,
  getProductsForCategory: actions.getProductsForCategory,

  getProductBySlugs: actions.getProductBySlugs,
  getProductById: actions.getProductById,
  getProductsForFoodmaker: actions.getProductsForFoodmaker,
  getAddByForProduct: actions.getAddByForProduct,
  trackProductView: actions.trackProductView,
};
