import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import query from 'query-string';
import paths from '../../../client/routes/paths';
import { referralsOperations } from '../../../ducks/referrals';
import { authSelectors } from '../../../ducks/auth';
import { Loader, Notification } from '../../elements';
// import { authSelectors } from '../../../ducks/auth';

export default (ChildComponent) => {
  class CheckReferralToken extends Component {
    componentDidMount() {
      if (!this.props.referral) {
        const { token } = query.parse(this.props.location.search);
        this.props.getReferralByToken(token);
      }
    }

    componentWillUpdate({ referral, isLoggedIn }) {
      // when updating the referral (so we only call notification once)
      if (this.props.referral === null && referral !== null) {
        if (isLoggedIn) { toast(this.login()); }
        if (referral === false) { toast(this.invalid()); }
        if (referral.redeemed) { toast(this.used()); }
      }
    }

    invalid = () => (
      <Notification type="error">
        <div className="title">Whoops!</div>
        <div className="content">Looks like your referral code is invalid.</div>
      </Notification>
    )

    login = () => (
      <Notification>
        <div className="content">This referral is only valid for new users.</div>
      </Notification>
    )

    used = () => (
      <Notification type="error">
        <div className="title">The referral has been redeemed.</div>
        <div className="content">Please login to your account.</div>
      </Notification>
    )

    render() {
      if (this.props.referral === null) { return <Loader />; }

      if (this.props.isLoggedIn) {
        return <Redirect to={paths.MARKET} />;
      }

      // when referral is found, but token is invalid
      if (this.props.referral === false) {
        return <Redirect to={paths.REGISTER} />;
      }

      // when referral is found, but has already been used to signup
      if (this.props.referral.redeemed) {
        return <Redirect to={paths.LOGIN} />;
      }

      return <ChildComponent {...this.props} />;
    }
  }

  const mapState = ({ auth, referrals }) => ({
    referral: referrals.referral,
    isLoggedIn: authSelectors.isLoggedIn(auth),
  });

  const mapDispatch = { getReferralByToken: referralsOperations.getReferralByToken };
  return connect(mapState, mapDispatch)(CheckReferralToken);
};
