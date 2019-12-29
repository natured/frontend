import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../../elements';
import { cartOperations, cartSelectors } from '../../../../ducks/cart';
import LineItem from '../LineItem/LineItem';
import './discountCode.scss';

class AppliedDiscountCode extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  onClick = async () => {
    this.setState({ loading: true });
    await this.props.removeCode();
    this.setState({ loading: false });
  }

  icon = () => {
    if (this.state.loading) {
      return <Icon type="spinner" spin />;
    }

    return (
      <a onClick={this.props.removeCode} className="close-icon">
        <Icon type="close" />
      </a>
    );
  }

  render() {
    if (!this.props.discount) { return null; }

    return (
      <LineItem title="Code Applied">
        {this.props.discount.code} <span className="icon">{this.icon()}</span>
      </LineItem>
    );
  }
}

const mapState = ({ cart }) => ({ discount: cartSelectors.getDiscount(cart) });
const mapDispatch = { removeCode: cartOperations.removeCode };
export default connect(mapState, mapDispatch)(AppliedDiscountCode);
