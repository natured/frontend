import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uiOperations } from '../../../../ducks/ui';

class Drawer extends Component {
  componentDidUpdate({ show }) {
    // Whenever show changes, let's make sure to set body overflows
    if (show !== this.props.show) {
      this.toggleOverflow(this.props.show);
    }
  }

  toggleOverflow = (value) => {
    document.body.classList.toggle('overflow-hidden', value);
  }

  close = () => {
    this.props.toggleDrawer(this.props.name, false);
  }

  render() {
    return (
      <div className={`${this.props.name}--${this.props.show ? 'opened' : 'closed'}`}>
        <div className={`${this.props.name}--overlay`} onClick={this.close} />
        <div className={`${this.props.name}--container`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ui }, { name }) => ({
  show: ui.drawers[name] || false,
});

const mapDispatchToProps = { toggleDrawer: uiOperations.toggleDrawer };

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
