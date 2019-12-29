import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartSelectors } from '../../../../ducks/cart';
import { Progress } from '../../../elements';

class ProgressBar extends Component {
  render() {
    return <Progress width={this.props.progressWidth} color="highlight" />;
  }
}

const mapStateToProps = ({ cart }) => ({
  progressWidth: cartSelectors.progress(cart),
});

export default connect(mapStateToProps)(ProgressBar);
