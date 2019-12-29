import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from './Drawer';
import CartBody from '../../../../client/components/cart/CartBody';
import { toggleDrawer } from '../../../../client/actions';


class CartDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidUpdate(props) {
    if (!this.state.loaded && props.show) {
      this.setState({ loaded: true });
    }
  }

  open = () => { this.props.toggleDrawer('cart', true); }

  close = () => { this.props.toggleDrawer('cart', false); }

  render() {
    return (
      <Drawer name="cart" show={this.props.show} close={this.close}>
        {this.state.loaded ? <CartBody close={this.close} /> : null}
      </Drawer>
    );
  }
}

function mapStateToProps({ userInterface: { drawers } }) {
  return { show: drawers.cart };
}

export default connect(mapStateToProps, { toggleDrawer })(CartDrawer);
