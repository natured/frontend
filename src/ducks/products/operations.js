import actions from './actions';

export default {
  getRecentlyAdded: actions.getRecentlyAdded,
  getProductSections: actions.getProductSections,
  getProductBySlugs: actions.getProductBySlugs,
  getProductById: actions.getProductById,
  getProductsForFoodmaker: actions.getProductsForFoodmaker,
  getAddByForProduct: actions.getAddByForProduct,
  trackProductView: actions.trackProductView,
};
