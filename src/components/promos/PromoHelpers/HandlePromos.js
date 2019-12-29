import React from 'react';
import { connect } from 'react-redux';
import { promosOperations } from '../../../ducks/promos';

export default (ChildComponent) => {
  class HandlePromos extends React.Component {
    componentDidMount() {
      this.props.checkForPromoCode();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapDispatch = { checkForPromoCode: promosOperations.checkForPromoCode };
  return connect(null, mapDispatch)(HandlePromos);
};
