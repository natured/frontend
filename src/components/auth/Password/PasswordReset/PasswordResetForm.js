import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../../elements';
import { FormValidation, formBuilder } from '../../../forms';
import { authOperations } from '../../../../ducks/auth';
import SuccessfulResetNotification from './PasswordResetNotifications/SuccessfulResetNotification';
import InvalidTokenNotification from './PasswordResetNotifications/InvalidTokenNotification';


class PasswordResetForm extends Component {
  submit = async ({ password, passwordConfirmation }) => {
    this.props.loading();

    const status = await this.props.resetPassword({
      token: this.props.match.params.token, password, passwordConfirmation,
    });

    if (status) { this.handleSuccess(); }
    if (!status) { this.handleError(); }
  }

  handleSuccess = () => {
    toast(<SuccessfulResetNotification />);
    this.props.history.push('/boston/market');
    this.props.reset();
  }

  handleError = () => {
    toast(<InvalidTokenNotification />);
    this.props.history.push('/login');
    this.props.reset();
  }

  render() {
    const universal = { type: 'password', disabled: this.props.disabled };
    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Input name="password" label="Password" placeholder="New Password" {...universal} />
        <Input name="passwordConfirmation" label="Password Confirmation" {...universal} />
        <button disabled={this.props.disabled} className="button--orange--full">
          {this.props.button('Reset Password')}
        </button>
      </Form>
    );
  }
}

const form = {
  form: 'passwordResetForm',
  validate: (values) => {
    const validator = new FormValidation(values, {
      password: 'min:6|required',
      passwordConfirmation: 'match:password|required~confirmation',
    });
    return validator.getErrors();
  },
};

const mapDispatch = { resetPassword: authOperations.resetPassword };
export default connect(null, mapDispatch)(withRouter(formBuilder(PasswordResetForm, form)));
