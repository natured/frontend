import { combineReducers } from 'redux';
import account from './account';
import auth from './auth';
import app from './app';
import availability from './availability';
import cart from './cart';
import categories from './categories';
import foodmakers from './foodmakers';
import orders from './orders';
import products from './products';
import promos from './promos';
import referrals from './referrals';
import search from './search';
import shopping from './shopping';
import subscriptions from './subscriptions';
import ui from './ui';

export default combineReducers({
  account,
  app,
  auth,
  availability,
  cart,
  categories,
  foodmakers,
  orders,
  productsNew: products,
  products,
  promos,
  referrals,
  search,
  shopping,
  subscriptions,
  ui,
});
