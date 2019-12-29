import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { cartOperations } from '../../../ducks/cart';
import { Icon } from '../../elements';
import './addToCart.scss';

class AddToCartDropdown extends React.Component {
  state = { value: 1 };

  componentDidMount() {
    this.setState({ value: this.props.quantity });
  }

  options = () => (
    [...Array(10).keys()].map(num => ({
      key: num + 1, value: num + 1, text: num + 1,
    }))
  )

  onChange = (e, { value }) => {
    this.updateCart(value);
  }

  updateCart = async (value) => {
    if (this.props.updating) {
      this.props.updating();
    }

    this.setState({ value });
    await this.props.addToCart(this.props.productId, value);

    if (this.props.done) {
      this.props.done();
    }
  }

  render() {
    return (
      <Dropdown
        icon={<Icon type="down" className="dropdown-down" />}
        fluid
        selection
        scrolling={false}
        value={this.state.value}
        onChange={this.onChange}
        options={this.options()}
        className="add-to-cart-dropdown"
      />
    );
  }
}

const mapDispatch = { addToCart: cartOperations.addToCart };
export default connect(null, mapDispatch)(AddToCartDropdown);
