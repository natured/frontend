import React from 'react';
import { connect } from 'react-redux';
import { accountOperations } from '../../../ducks/account';
import { Loader } from '../../elements';
import WalkthroughIntroduction from './WalkthroughSteps/WalkthroughIntroduction';
import WalkthroughPhoneNumber from './WalkthroughSteps/WalkthroughPhoneNumber';
import WalkthroughDelivery from './WalkthroughSteps/WalkthroughDelivery';
import WalkthroughBilling from './WalkthroughSteps/WalkthroughBilling';
import './walkthrough.scss';

class Walkthrough extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
  }

  componentDidMount() {
    if (!this.props.account) {
      this.props.getAccount();
    }
  }

  complete = () => {
    // Analytics.track('COMPLETES_ACCOUNT_MODAL');
    this.props.modalParam.complete();
  }

  next = () => {
    this.setState({ step: this.state.step + 1 });
  }

  back = () => {
    this.setState({ step: this.state.step - 1 });
  }

  step = () => {
    if (this.state.step === 1) {
      return <WalkthroughIntroduction next={this.next} />;
    }

    if (this.state.step === 2) {
      return <WalkthroughPhoneNumber next={this.next} back={this.back} />;
    }

    if (this.state.step === 3) {
      return <WalkthroughDelivery next={this.next} back={this.back} />;
    }

    if (this.state.step === 4) {
      return <WalkthroughBilling next={this.next} back={this.back} complete={this.complete} />;
    }

    return <Loader minHeight={200} />;
  }

  render() {
    return (
      <div>
        {this.step()}
      </div>
    );
  }
}

const mapState = ({ account }) => ({ account: account.account });
const mapDispatch = { getAccount: accountOperations.getAccount };
export default connect(mapState, mapDispatch)(Walkthrough);
