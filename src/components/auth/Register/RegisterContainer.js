import React, { Component } from 'react';
import { Loader } from '../../elements';
import StartAccountSection from './StartAccount/StartAccountSection';
import CompleteAccountSection from './CompleteAccount/CompleteAccountSection';
import OutOfDeliverySection from './OutOfDelivery/OutOfDeliverySection';

/**
 * steps:
 *
 *   1: start registration (asking for zip and email)
 *   2: on successful zip -> complete registration (name and password)
 *   3: on failed zip -> out of delivery
 */

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
  }

  reset = () => {
    this.setState({ step: 1 });
  }

  updateRegistration = ({ deliverable, zip, email }) => {
    const step = deliverable ? 2 : 3;
    this.setState({ step, zip, email });
  }

  render() {
    if (this.state.step === 1) {
      return <StartAccountSection updateRegistration={this.updateRegistration} />;
    }

    if (this.state.step === 2) {
      return <CompleteAccountSection email={this.state.email} zip={this.state.zip} />;
    }

    if (this.state.step === 3) {
      return <OutOfDeliverySection zip={this.state.zip} back={this.reset} />;
    }

    return <Loader />;
  }
}

export default RegisterContainer;
