import React from 'react';
import { connect } from 'react-redux';
import { appOperations } from '../../../../ducks/app';
import { referralsSelectors } from '../../../../ducks/referrals';
import { Icon } from '../../../elements';
import './inviteHistory.scss';

class InviteHistory extends React.Component {
  click = () => {
    this.props.toggleModal('referral-invite', true);
  }

  render() {
    return (
      <div className="invite-history-box">
        <div className="invite-history-title">
          <h3>Referrals</h3>
          <span className="piggy-bank">
            <Icon type="piggyBank" />
          </span>
        </div>
        <div className="invite-history-stats">
          <div className="invite-history-stat">
            <span onClick={this.click} className="stat-name">
              Invites Sent
            </span>
            <span>{this.props.invites}</span>
          </div>
          <div className="invite-history-stat">
            <span onClick={this.click} className="stat-name">
              Pending
            </span>
            <span>${this.props.pending}</span>
          </div>
          <div className="invite-history-stat">
            <span onClick={this.click} className="stat-name">
              Credits Received
            </span>
            <span>${this.props.redeemed}</span>
          </div>
        </div>
        <div className="invite-history-button">
          <button onClick={this.click} className="button--light-blue--full">
            Show Invite Details
          </button>
        </div>
      </div>
    );
  }
}

const mapState = ({ referrals }) => ({
  invites: referralsSelectors.numberReferrals(referrals),
  pending: referralsSelectors.pendingAmount(referrals),
  redeemed: referralsSelectors.redeemedAmount(referrals),
});

const mapDispatch = { toggleModal: appOperations.toggleModal };
export default connect(mapState, mapDispatch)(InviteHistory);
