import React, { Component } from 'react';
// import { PageView } from '../../../services/Analytics';
import page from '../page';
import WhenLoggedOut from '../../components/auth/AuthHelpers/WhenLoggedOut';
import IntroSection from '../../components/static/HomeSections/IntroSection';
import HowToSection from '../../components/static/HomeSections/HowToSection';
import ProductSections from '../../components/static/HomeSections/ProductSections';
import RecentlyAddedSection from '../../components/static/HomeSections/RecentlyAddedSection';
// import WhyNaturedSection from '../../../components/static/HomeSections/WhyNaturedSection';
import FoodmakerSection from '../../components/static/HomeSections/FoodmakerSection';
import ShopCategoriesSection from '../../components/static/HomeSections/ShopCategoriesSection';

class HomePage extends Component {
  static head = () => ({ title: '' });


  render() {
    return [
      <IntroSection />,
      <HowToSection />,
      <ProductSections key="products" />,
      <RecentlyAddedSection key="recently-added" />,
      <ShopCategoriesSection key="category-section" />,
      <FoodmakerSection />
    ];
  }
}

export default {
  component: page(HomePage),
};
