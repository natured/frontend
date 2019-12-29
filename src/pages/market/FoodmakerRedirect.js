import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import page from '../page';
import { foodmakersSelectors, foodmakersOperations } from '../../ducks/foodmakers';
import NotFound from '../../components/static/NotFound/NotFound';

class FoodmakerRedirect extends Component {
  componentDidMount() {
    if (this.props.foodmaker === 'loading') {
      this.getFoodmaker(this.props.match.params.foodmakerId);
    }
  }

  getFoodmaker = (foodmakerId) => {
    this.props.getFoodmakerById(foodmakerId);
  }

  render() {
    if (this.props.foodmaker === 'loading') {
      return <div className="product-page full-height" />;
    }

    if (this.props.foodmaker === 'error') {
      return <NotFound />;
    }

    return <Redirect to={`/boston/market/${this.props.foodmaker.slug}`} />;
  }
}

const mapState = ({ foodmakers }, { match }) => ({
  foodmaker: foodmakersSelectors.lookupById(foodmakers, match.params.foodmakerId),
});

const mapDispatch = { getFoodmakerById: foodmakersOperations.getFoodmakerById };

export default {
  component: connect(mapState, mapDispatch)(page(FoodmakerRedirect, 'page--error')),
  loadDataWithMatch: (store, { params: { foodmakerId } }) => (
    store.dispatch(foodmakersOperations.getFoodmakerById(foodmakerId))
  ),
};
