import React from 'react';
import { Icon } from '../../../elements';

class AddToCartButton extends React.Component {
  state = { loading: false };

  renderText = () => (
    this.state.loading ? 'Adding...' : (this.props.children || 'Add')
  )

  renderIcon = () => (
    this.state.loading ? null : <Icon type="fatPlus" />
  )

  onClick = async () => {
    this.setState({ loading: true });
    await this.props.addToCart(1);
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
