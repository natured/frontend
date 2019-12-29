import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { toggleDrawer } from '../../../../client/actions';

class Toggle extends Component {
  toggle = () => {
    // this.props.toggleDrawer('nav', !this.props.show);
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

export default connect(mapStateToProps)(Toggle);
