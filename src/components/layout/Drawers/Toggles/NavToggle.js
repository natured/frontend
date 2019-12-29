import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uiOperations } from '../../../../ducks/ui';

class Toggle extends Component {
  toggle = () => {
    // this.props.toggleSkinnyNav(false);
    this.props.toggleDrawer('nav', !this.props.show);
  }

  render() {
    return (
      <div className="nav--toggle" onClick={this.toggle}>
        <div className={`toggle--${this.props.show ? 'x' : 'bars'}`}>
          <span />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ui }) => ({
  show: ui.drawers.nav,
})

const mapDispatchToProps = {
  toggleDrawer: uiOperations.toggleDrawer,
  toggleSkinnyNav: uiOperations.toggleSkinnyNav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
