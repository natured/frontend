import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../../elements';
import { shoppingSelectors } from '../../../../ducks/shopping';
import WalkthroughSegment from './WalkthroughSegment';
import WalkthroughSteps from './WalkthroughSteps';
import PaymentMethods from '../../../account/AccountPayment/PaymentMethods/PaymentMethods';

class WalkthroughBilling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { completing: false };
  }

  complete = () => {
    this.setState({ completing: true });
    this.props.complete();
  }

  button = () => {
    const { billing } = this.props;
    if (!billing || billing.cards.length === 0) { return null; }

    return (
      <button onClick={this.complete} className="button--light-blue--full finish-button" disabled={this.state.completing}>
        {this.state.completing ? 'Finishing...' : (
          <span>Complete Your Account<Icon type="longArrowRight" className="icon" /></span>
        )}
      </button>
    );
  }


  render() {
    return (
      <div className="walkthrough">
        <h3 className="header--5">Add a payment method</h3>
        <WalkthroughSegment title={`You are shopping for ${this.props.deliveryDay}.`}>
          As a reminder, your card is charged at midnight the night before
          your delivery.
        </WalkthroughSegment>
        <PaymentMethods />
        {this.button()}
        <WalkthroughSteps back={this.props.back} canSkip={false} />
      </div>
    );
  }
}

const mapState = ({ account, shopping }) => ({
  billing: account.billing,
  deliveryDay: shoppingSelectors.deliveryDate(shopping),
});
export default connect(mapState)(WalkthroughBilling);
