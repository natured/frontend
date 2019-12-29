import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkinnyHeader from './SkinnyHeader/SkinnyHeader';
import MainHeader from './MainHeader/MainHeader';
import ScrollHeader from './ScrollHeader/ScrollHeader';
import { authOperations, authSelectors } from '../../../ducks/auth';
import { categoriesOperations } from '../../../ducks/categories';
import { shoppingOperations } from '../../../ducks/shopping';

class MarketHeader extends Component {
  componentDidMount() {
    if (!this.props.checkedForUser) {
      this.props.getUser();
    }

    if (!this.props.categories) {
      this.props.getParentCategories();
    }

    if (!this.props.timeslot) {
      this.props.getTimeslot();
    }
  }

  update = ({ show }) => {
    if (show !== this.props.show) {
      // this.props.toggleSkinnyNav(show);
    }
  }

  render() {
    const className = `nav--fixed${this.props.show ? ' show' : ''}`;
    const { categories, checkedForUser, timeslot } = this.props;
    const loaded = categories && checkedForUser && timeslot;
    return (
      <div>
        <div id={this.props.id} className={className}>
          <ScrollHeader update={this.update} tolerance={5} />
          <SkinnyHeader loaded={loaded} />
          <MainHeader route={this.props.route} loaded={loaded} />
        </div>
        <div className="nav--spacer" />
      </div>
    );
  }
}

const mapState = ({ ui, categories, auth, shopping }) => ({
  show: ui.showSkinnyNav,
  categories: categories.parents,
  timeslot: shopping.timeslot,
  checkedForUser: authSelectors.checkedForUser(auth),
});

const mapDispatch = {
  getUser: authOperations.getUser,
  getTimeslot: shoppingOperations.getTimeslot,
  // toggleSkinnyNav,
  getParentCategories: categoriesOperations.getParentCategories,
};

export default connect(mapState, mapDispatch)(MarketHeader);
