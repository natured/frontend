import React from 'react';
import { connect } from 'react-redux';
import WalkthroughSegment from './WalkthroughSegment';
import WalkthroughSteps from './WalkthroughSteps';
import PhoneNumber from '../../../account/AccountDetails/PhoneNumber/PhoneNumber';
import { Icon } from '../../../elements';

class WalkthroughPhoneNumber extends React.Component {
  skip = () => {
    // Analytics.track('SKIPPED_PHONE_NUMBER');
    this.props.next();
  }

  render() {
    const { phone, phoneValidated, back } = this.props;
    const canSkip = !phone || !phoneValidated;
    return (
      <div className="walkthrough">
        <h3 className="header--5">Add your phone number</h3>

        <WalkthroughSegment title="Get notifications about your orders">
          We’ll use your phone number to send delivery updates and
          shopping reminders. Your notifications preferences
          can be changed at any time in your account page.
        </WalkthroughSegment>

        <PhoneNumber />

        {canSkip ? null : (
          <button className="button--light-blue next-button" onClick={this.props.next}>
            <span>Continue</span>  <Icon type="longArrowRight" />
          </button>
        )}

        <WalkthroughSteps next={this.skip} back={back} canSkip={canSkip} />
      </div>
    );
  }
}

const mapState = ({ account }) => ({
  phone: account.contact.phone,
  phoneValidated: account.contact.phoneValidated,
});

export default connect(mapState)(WalkthroughPhoneNumber);
