import React from 'react';
import { Icon } from '../../elements';
import './addToCart.scss';

class AddToCartButton extends React.Component {
  state = { loading: false };

  renderText = () => (
    this.state.loading ? 'Adding...' : (this.props.children || 'Add')
  )

  renderIcon = () => (
    this.state.loading ? null : <Icon type="fatPlus" />
  )

  onClick = async () => {
    alert('It is no longer possible to shop from Natured, sorry!');
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <button onClick={this.onClick} disabled={this.state.loading} className="add-to-cart add">
        <span>{this.renderText()}</span>
        <span className="add-icon">{this.renderIcon()}</span>
      </button>
    );
  }
}

export default AddToCartButton;
