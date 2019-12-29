import React from 'react';
import { connect } from 'react-redux';
import { referralsSelectors } from '../../../../ducks/referrals';
import { Modal } from '../../../elements';
import './inviteModal.scss';

class InviteModal extends React.Component {
  renderReferrals = value => (
    this.props.referrals.map((referral) => {
      if (referral.ordered !== value) { return null; }
      return <div className="modal-referral">{referral.recipient.email}</div>;
    })
  )

  render() {
    if (!this.props.referrals) { return null; }
    return (
      <Modal name="referral-invite">
        <div>
          <h1 className="header--5" style={{ paddingBottom: '2rem' }}>
            Invites Sent ({this.props.invites})
          </h1>
          <div style={{ paddingBottom: '2rem' }}>
            <h1 className="subtitle">Pending - ${this.props.pending}</h1>
            <p className="paragraph" style={{ paddingBottom: '1rem' }}>
              The amount is estimated based on the number of invites. Credit is
              earned when each person places their first Natured order.
            </p>
            {this.renderReferrals(false)}
          </div>
          <div style={{ paddingBottom: '2rem' }}>
            <h1 className="subtitle">Redeemed - ${this.props.redeemed}</h1>
            {this.renderReferrals(true)}
          </div>
        </div>
      </Modal>
    );
  }
}

const mapState = ({ referrals }) => ({
  referrals: referrals.referrals,
  invites: referralsSelectors.numberReferrals(referrals),
  pending: referralsSelectors.pendingAmount(referrals),
  redeemed: referralsSelectors.redeemedAmount(referrals),
});

export default connect(mapState)(InviteModal);
