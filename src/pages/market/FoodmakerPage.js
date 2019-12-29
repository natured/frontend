import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PageView } from '../../../services/Analytics';
import page from '../page';
import { Loader } from '../../components/elements';
import { foodmakersOperations, foodmakersSelectors } from '../../ducks/foodmakers';
import FoodmakerPageContainer from '../../components/foodmakers/FoodmakerPage/FoodmakerPageContainer';

class FoodmakerPage extends Component {
  static head = ({ foodmaker }) => ({
    alone: true,
    title: foodmaker ? `${foodmaker.name} | Delivered with Natured | Boston` : null,
    img: foodmaker ? `https://natured.s3.amazonaws.com/imgix/${foodmaker.img}.jpg` : null,
  });

  componentDidMount() {
    this.checkForFoodmaker(this.props);
  }

  componentDidUpdate(nextProps) {
    this.checkForFoodmaker(nextProps);
  }

  checkForFoodmaker = ({ foodmaker, match }) => {
    foodmaker ? this.track(foodmaker) : this.getFoodmaker(match.params); // eslint-disable-line
  }

  track = (foodmaker) => {
  //   PageView.track('Foodmaker', foodmaker);
  }

  // given the params, gets the foodmaker for the foodmaker slug
  getFoodmaker = ({ foodmaker }) => {
    this.props.getFoodmakerBySlug(foodmaker);
  }

  render() {
    if (!this.props.foodmaker) { return <Loader />; }
    return <FoodmakerPageContainer foodmaker={this.props.foodmaker} />;
  }
}


const mapState = ({ foodmakers }, { match }) => ({
  foodmaker: foodmakersSelectors.lookupByMatch(foodmakers, match.params),
});

const mapDispatch = {
  getFoodmakerBySlug: foodmakersOperations.getFoodmakerBySlug,
  trackFoodmakerView: foodmakersOperations.trackFoodmakerView,
};

export default {
  component: connect(mapState, mapDispatch)(page(FoodmakerPage)),
  loadDataWithMatch: (store, { params }) => (
    store.dispatch(foodmakersOperations.getFoodmakerBySlug(params.foodmaker))
  ),
};
