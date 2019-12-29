import React from 'react';
import { Icon } from '../../elements';
import RegisterForm from '../../auth/Register/RegisterForm';
import './claimReferralBanner.scss';

class ClaimReferralBanner extends React.Component {

  renderContent = (referral) => {
    if (!referral) {
      return <div className="centered"><Icon type="spinner" spin /></div>;
    }

    return [
      <h1 className="header--3" style={{ paddingBottom: '1rem' }}>
        {referral.referrer.user.first} gave you $10 towards your first order!
      </h1>,
      <p className="paragraph">
        Sign up here to claim your $10 towards your first delivery
        from Natured. Your credit will be applied to your cart.
      </p>,
      <RegisterForm />,
    ];
  }

  render() {
    return (
      <div className="claim-referral-banner">
        <div className="container--outer">
          <div className="referral-banner-content">
            <div className="referral-registration">
              {this.renderContent(this.props.referral)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClaimReferralBanner;
