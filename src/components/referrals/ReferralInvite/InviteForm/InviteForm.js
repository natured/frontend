import React from 'react';
import { connect } from 'react-redux';
import { referralsOperations } from '../../../../ducks/referrals';
import { InputList } from '../../../elements';
import './inviteForm.scss';

const sleep = (ms = 0) => (new Promise(r => setTimeout(r, ms)));

class InviteForm extends React.Component {
  state = { emails: [], input: '', reset: false, loading: false, success: false };

  validate = email => (/\S+@\S+\.\S+/.test(email))

  valid = () => {
    const values = [this.state.input].concat(this.state.emails);
    return values.filter(value => (this.validate(value)));
  }

  disabled = () => {
    const values = this.valid();
    return values.length === 0 ? 'disabled' : '';
  }

  submit = async () => {
    this.setState({ loading: true });
    await this.props.sendReferrals(this.valid());
    this.setState({ reset: true, loading: false, success: true });
    await sleep(1000);
    this.setState({ reset: false, loading: false, success: false });
  }

  updateValues = (emails) => { this.setState({ emails }); }

  onChange = (input) => { this.setState({ input }); }

  renderButton = () => {
    if (this.state.loading) { return 'Sending...'; }
    if (this.state.success) { return 'Invites Sent!'; }
    return 'Send Invites';
  }

  render() {
    const className = `button--orange ${this.disabled()}`;
    return (
      <div className="referral-invite-form">
        <InputList
          type="email"
          className="referral-invite"
          placeholder="Enter email addresses"
          onChange={this.onChange}
          updateValues={this.updateValues}
          reset={this.state.reset}
        />
        <button onClick={this.submit} className={className}>
          {this.renderButton()}
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  sendReferrals: referralsOperations.sendReferrals,
};

export default connect(null, mapDispatch)(InviteForm);
