import App from '../app/App';
import pages from './pages';
import paths from './paths';

export default [
  {
    ...App,
    path: '/',
    routes: [
      { ...pages.market.category, path: paths.SUBCATEGORY },
      { ...pages.market.category, path: paths.CATEGORY },
      { ...pages.market.product, path: paths.PRODUCT },
      { ...pages.market.foodmaker, path: paths.FOODMAKER, exact: true },
      { ...pages.market.productRedirect, path: paths.PRODUCT_BY_ID },
      { ...pages.market.foodmakerRedirect, path: paths.FOODMAKER_BY_ID },
      { ...pages.market.home, path: paths.MARKET },
      { ...pages.auth.register, path: paths.REGISTER, exact: true },
      { ...pages.auth.login, path: paths.LOGIN, exact: true },
      { ...pages.auth.password, path: paths.PASSWORD_RESET },
      { ...pages.market.home, path: paths.LANDING, exact: true },
      { ...pages.order.receipt, path: paths.ORDER },
      { ...pages.order.cart, path: paths.CART },
      { ...pages.static.about, path: paths.ABOUT_US, exact: true },
      { ...pages.static.faqs, path: paths.FAQ, exact: true },
      { ...pages.static.terms, path: paths.TERMS, exact: true },
      { ...pages.static.privacy, path: paths.PRIVACY, exact: true },
      { ...pages.errors.notFound, path: '*' },
    ],
  },
];
