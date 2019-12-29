import React from 'react';
import InviteHistory from './InviteHistory/InviteHistory';
import InviteForm from './InviteForm/InviteForm';
import { Icon } from '../../elements';
import './referralInvite.scss';

class ReferralInvite extends React.Component {
  render() {
    return (
      <div className="referral-vertical-spacing">
        <div className="referral-invite-grid">
          <div className="referral-invite-share">
            <h1 className="header--3">Share your love of local food</h1>
            <p className="referral-invitation">
              Invite people you know to join Natured – for every person you
              invite that places their first order, you’ll get $5 in credit
              towards your next Natured delivery!
            </p>
            <InviteForm />
          </div>
          <div className="referral-invite-history">
            <InviteHistory />
          </div>
        </div>
        <div className="referral-how-it-works">
          <h5>How It Works</h5>
          <div className="grid">
            <div>
              <Icon type="paperPlane" className="icon" />
              Send family, friends, & neighbors an invite
              for $10 off their first order.
            </div>
            <div>
              <Icon type="boxDollar" className="icon" />
              Get $5 every time someone you
              invite places their first order.
            </div>
            <div>
              <Icon type="basket" className="icon" />
              Your credits will be automatically
              applied to your future orders!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReferralInvite;
