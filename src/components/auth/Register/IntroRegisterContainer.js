import React, { Component } from 'react';
import { Loader } from '../../elements';
import ZipCheckSection from './ZipCheck/ZipCheckSection';
import ContinueWithEmail from './CompleteAccount/ContinueWithEmail';
import Newsletter from './OutOfDelivery/Newsletter';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
  }

  reset = () => {
    this.setState({ step: 1 });
  }

  updateRegistration = ({ deliverable, zip }) => {
    const step = deliverable ? 2 : 3;
    this.setState({ step, zip });
  }

  step = (step) => {
    this.setState({ step });
  }

  render() {
    if (this.state.step === 1) {
      return <ZipCheckSection updateRegistration={this.updateRegistration} />;
    }

    if (this.state.step === 2) {
      return <ContinueWithEmail next={() => this.step(3)} zip={this.state.zip} />;
    }

    if (this.state.step === 3) {
      return <Newsletter zip={this.state.zip} back={this.reset} />;
    }

    return <Loader />;
  }
}

export default RegisterContainer;
