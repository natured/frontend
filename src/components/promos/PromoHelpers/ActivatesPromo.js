import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { promosOperations } from '../../../ducks/promos';
import TenOffFirstOrder from '../Notifications/TenOffFirstOrder';

export default (ChildComponent, code) => {
  class ActivatesPromo extends React.Component {
    componentDidMount() {
      this.storePromo();
    }

    storePromo = async () => {
      const activated = await this.props.storePromoCode(code);
      if (activated) { toast(TenOffFirstOrder); }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapDispatch = { storePromoCode: promosOperations.storePromoCode };
  return connect(null, mapDispatch)(ActivatesPromo);
};
