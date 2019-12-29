import React from 'react';
import { connect } from 'react-redux';
import { accountOperations } from '../../../../ducks/account';
import { Loader } from '../../../elements';
import StripeHelper from '../Stripe/StripeHelper';
import CardsList from '../Cards/CardsList';
import PaymentMethodForm from './PaymentMethodForm';

class PaymentMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentWillMount() {
    if (!this.props.billing) {
      this.props.getBilling();
    }
  }

  show = () => this.setState({ show: true });

  hide = () => this.setState({ show: false });

  button = none => (
    <button className="button--white" onClick={this.show}>
      {none ? 'Add A Card' : 'Add Another Card'}
    </button>
  )

  render() {
    if (!this.props.billing) { return <Loader minHeight={200} />; }
    const none = this.props.billing.cards.length === 0;
    return (
      <div className="account-form-container">
        <CardsList cards={this.props.billing.cards} />
        <StripeHelper>
          {this.state.show ? <PaymentMethodForm hide={this.hide} /> : this.button(none)}
        </StripeHelper>
      </div>
    );
  }
}

const mapState = ({ account }) => ({ billing: account.billing });
const mapDispatch = { getBilling: accountOperations.getBilling };
export default connect(mapState, mapDispatch)(PaymentMethods);
