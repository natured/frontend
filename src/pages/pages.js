// 1. Static Pages
import AboutPage from './static/AboutPage';
import FAQPage from './static/FAQPage';
import TermsPage from './static/TermsPage';
import PrivacyPage from './static/PrivacyPage';

// 2. Auth Pages
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import PasswordResetPage from './auth/PasswordResetPage';

// 3. Market Pages
import HomePage from './market/HomePage';
import CategoryPage from './market/CategoryPage';
import FoodmakerPage from './market/FoodmakerPage';
import ProductPage from './market/ProductPage';
import FoodmakerRedirect from './market/FoodmakerRedirect';
import ProductRedirect from './market/ProductRedirect';

// 6. Order pages
import OrderPage from './orders/OrderPage';
import CheckoutPage from './orders/CheckoutPage';
import CartPage from './orders/CartPage';

// 7. Errors pages
import NotFoundPage from './errors/NotFoundPage';

export default {
  static: {
    about: AboutPage,
    faqs: FAQPage,
    terms: TermsPage,
    privacy: PrivacyPage,
  },
  auth: {
    login: LoginPage,
    register: RegisterPage,
    password: PasswordResetPage,
  },
  market: {
    home: HomePage,
    category: CategoryPage,
    product: ProductPage,
    productRedirect: ProductRedirect,
    foodmaker: FoodmakerPage,
    foodmakerRedirect: FoodmakerRedirect,
  },
  order: {
    cart: CartPage,
    checkout: CheckoutPage,
    receipt: OrderPage,
  },
  errors: {
    notFound: NotFoundPage,
  },
};
