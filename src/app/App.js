import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';


import { ScrollToTop } from '../components/elements';
// import Toast from '../components/layout/Toast/Toast';
// import Modals from '../components/layout/Modals/Modals';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Drawers from '../components/layout/Drawers/Drawers';
// import RecommendProduct from '../components/layout/Feedback/RecommendProduct';
import '../styles/app.scss';


const App = ({ location, route }) => (
  <div>
    <ScrollToTop route={location.pathname} />
    <Header id="navbar" route={location.pathname} />
    {renderRoutes(route.routes)}
    <Drawers />
    <Footer />
  </div>
);

export default { component: App };
