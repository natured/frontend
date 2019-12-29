import React from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';
import LineItem from '../LineItem/LineItem';

class Total extends React.Component {
  auth = () => {
    if (!this.props.auth) { return null; }
    return <div className="cart--pricing--subdued text-right">{this.props.auth}</div>;
  }

  sub = () => {
    if (!this.props.auth) { return null; }
    return <div className="cart--pricing--subdued">Authorization Amount</div>;
  }

  render() {
    return (
      <LineItem title="Total" sub={this.sub()} className="cart--pricing--total">
        {this.props.total} {this.auth()}
      </LineItem>
    );
  }
}

const mapState = ({ cart }) => ({
  total: cartSelectors.total(cart),
  auth: cartSelectors.auth(cart),
});

export default connect(mapState)(Total);
