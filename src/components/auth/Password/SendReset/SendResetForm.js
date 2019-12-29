import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { toast } from 'react-toastify';
import { forgotPassword } from '../../../../client/actions';
import { Input, Notification } from '../../../elements';
import { FormValidation, formBuilder } from '../../../forms';

class SendPasswordResetForm extends Component {
  submit = async ({ email }) => {
    this.props.loading();
    const result = await this.props.forgotPassword({ email });
    this.props.handleOutcome(result, this.handleSuccess);
  }

  successNotification = () => (
    <Notification type="success">
      <div className="title">Check your email.</div>
      <div className="content">
        We sent you instructions for resetting your password.
      </div>
    </Notification>
  )

  handleSuccess = () => {
    toast(this.successNotification());
    this.props.reset();
    this.props.hide();
  }

  render() {
    const email = { name: 'email', label: 'Email Address' };
    const { handleSubmit, button, disabled } = this.props;
    const handleChange = (e, value) => this.props.updateEmail(value);

    return (
      <Form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Input {...email} type="email" disabled={disabled} onChange={handleChange} />
        <button disabled={disabled} className="button--orange--full">
          {button('Send Reset Link')}
        </button>
      </Form>
    );
  }
}

const form = {
  form: 'sendResetForm',
  enableReinitialize: true,
  validate: (values) => {
    const rules = { email: 'email|required' };
    const validator = new FormValidation(values, rules);
    return validator.getErrors();
  },
};

function map(state, { email }) {
  return { initialValues: { email } };
}

export default connect(map, { forgotPassword })(formBuilder(SendPasswordResetForm, form));
