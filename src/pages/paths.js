const prefix = '/boston/market';

export default {
  // static pages
  LANDING: '/',
  ABOUT_US: '/about-us',
  FAQ: '/frequently-asked-questions',
  TERMS: '/terms',
  PRIVACY: '/privacy',

  // authentication
  LOGIN: '/login',
  LOGOUT: '/login',
  REGISTER: '/get-started',
  PASSWORD_RESET: '/reset/:token',

  // marketplace pages
  MARKET: `${prefix}`,
  CATEGORY: `${prefix}/browse/:category`,
  SUBCATEGORY: `${prefix}/browse/:category/:subcategory`,
  PRODUCT: `${prefix}/:foodmaker/:product`,
  FOODMAKER: `${prefix}/:foodmaker`,

  // redirects to market pages
  PRODUCT_BY_ID: '/products/:productId',
  FOODMAKER_BY_ID: '/foodmakers/:foodmakerId',

  // account pages
  ACCOUNT: '/account',
  ACCOUNT_DETAILS: '/account/details',
  ACCOUNT_PAYMENT: '/account/payment',
  ACCOUNT_NOTIFICATIONS: '/account/notifications',
  ACCOUNT_ORDERS: '/account/orders',
  ACCOUNT_SUBSCRIPTIONS: '/account/subscriptions',

  // checkout and order pages
  ORDER: '/order/:orderId',
  CART: '/cart',
  CHECKOUT: '/checkout',

  // referal pages
  INVITE: '/invite',
  CLAIM: '/referral',
  SAVIN_HILL: '/savinhill',
};
