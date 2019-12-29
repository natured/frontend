import React from 'react';
import { Icon } from '../../../elements';

const WAIT_INTERVAL = 1000;

class AddToCartDropdown extends React.Component {
  componentDidMount() {
    this.setState({ value: this.props.carted, loading: false, updated: false });
  }

  componentDidUpdate({ carted }) {
    // when cart is updated to reflect the number we're showing
    if (this.props.carted !== carted) {
      if (parseInt(carted, 10) === parseInt(this.state.value, 10)) {
        // stop loading & show as successful!
        this.setState({ loading: false, updated: true });
        setTimeout(() => this.setState({ updated: false }), WAIT_INTERVAL);
      }
    }
  }

  renderIcon = () => {
    if (this.state.loading) {
      return <Icon type="spinner" className="fa-spin" />;
    }

    if (this.state.updated) {
      return <Icon className="success" type="badgeCheck" />;
    }

    return <Icon type="down" />;
  }

  onChange = async ({ target }) => {
    this.setState({ loading: true, value: target.value });
    await this.props.addToCart(target.value);
  }

  renderOptions = () => {
    const max = this.props.max < 10 ? this.props.max : 10;

    const values = this.props.showRemove
      ? Array.from({ length: max + 1 }, (v, k) => k)
      : Array.from({ length: max }, (v, k) => k + 1);

    return values.map(value => (
      <option key={value} value={value}>{value > 0 ? value : 'Remove'}</option>
    ));
  }

  render() {
    return (
      <div className="add-to-cart dropdown">
        <select disabled={this.state.loading} onChange={this.onChange} value={this.state.value}>
          {this.renderOptions()}
        </select>
        <div className="dropdown-icon">
          {this.renderIcon()}
        </div>
      </div>
    );
  }
}

export default AddToCartDropdown;
