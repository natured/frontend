import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import HandleEmailConfirmation from '../components/auth/AuthHelpers/HandleEmailConfirmation';
import HandlePromos from '../components/promos/PromoHelpers/HandlePromos';
import { appOperations } from '../ducks/app';
import WhenAuth from '../components/auth/AuthHelpers/WhenAuth';
import { ScrollToTop } from '../components/elements';
import Toast from '../components/layout/Toast/Toast';
import Modals from '../components/layout/Modals/Modals';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Drawers from '../components/layout/Drawers/Drawers';
import RecommendProduct from '../components/layout/Feedback/RecommendProduct';
import '../styles/app.scss';

class App extends Component {


  render() {
    return (
      <div>
        <ScrollToTop route={this.props.location.pathname} />
        <Header id="navbar" route={this.props.location.pathname} />
        {renderRoutes(this.props.route.routes)}
        <RecommendProduct location={this.props.location.pathname} />
        <Footer />
        <Drawers />
        <Modals />
        <Toast />
      </div>
    );
  }
}

const mapState = ({ app }) => ({
  ENV: app.env,
  PUSHER_KEY: app.keys.PUSHER_KEY,
  AMPLITUDE_KEY: app.keys.AMPLITUDE_KEY,
});

const mapDispatch = { checkForPromoCode: appOperations.checkForPromoCode };

export default {
  component: connect(mapState, mapDispatch)(
    HandleEmailConfirmation(HandlePromos(App)),
  ),
};
