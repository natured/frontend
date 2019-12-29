import React from 'react';
import { connect } from 'react-redux';
import { Icon, Toggle } from '../../../elements';
import { accountOperations } from '../../../../ducks/account';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { defaultLoading: false, removeLoading: false };
  }

  makeDefault = async () => {
    if (!this.state.removeLoading) {
      this.setState({ defaultLoading: true });
      await this.props.makeDefaultPayment(this.props.card.id);
      this.setState({ defaultLoading: false });
    }
  }

  remove = () => {
    if (!this.state.defaultLoading) {
      this.setState({ removeLoading: true });
      this.props.removePayment(this.props.card.id);
    }
  }

  renderDefaultToggle = () => {
    if (this.props.alone) { return null; } // if only card, no need to show

    if (this.state.defaultLoading) {
      return <Icon type="spinner" spin className="loading" />;
    }

    return (
      <Toggle
        size="lg"
        onClick={this.makeDefault}
        value={this.props.card.default}
        disabled={this.props.card.default}
        type="circle"
      />
    );
  }

  renderRemove = () => {
    if (this.props.card.default) { return null; }

    if (this.state.removeLoading) {
      return <span className="removing"><Icon type="spinner" spin /></span>;
    }

    return <span onClick={this.remove} className="remove"><Icon type="close" /></span>;
  }

  render() {
    return (
      <div className={`credit-card ${this.props.alone ? 'alone' : ''}`}>
        <div className="card-details">
          {this.props.alone ? null : (
            <span className="default">{this.renderDefaultToggle()}</span>
          )}
          <span className="icon">
            <Icon type={this.props.card.brand.replace(/ /g, '')} size="2x" />
          </span>
          <span>ending in {this.props.card.last4}</span>
        </div>
        {this.props.alone ? null : (
          <div className="card-actions">{this.renderRemove()}</div>
        )}
      </div>
    );
  }
}

const mapDispatch = {
  removePayment: accountOperations.removePayment,
  makeDefaultPayment: accountOperations.makeDefaultPayment,
};

export default connect(null, mapDispatch)(Card);
