import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sticky extends Component {
  render() {
    const className = `${this.props.className} ${this.props.show ? 'has--skinny' : ''}`;
    return <div className={className}>{this.props.children}</div>;
  }
}

function mapStateToProps({ ui }) {
  return { show: ui.showSkinnyNav };
}

export default connect(mapStateToProps)(Sticky);
