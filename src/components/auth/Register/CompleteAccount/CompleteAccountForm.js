import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { toast } from 'react-toastify';
import WelcomeNotification from '../../Notifications/WelcomeNotification';
import { Input } from '../../../elements';
import { FormValidation, formBuilder, Split } from '../../../forms';
import { authOperations } from '../../../../ducks/auth';

class CompleteAccountForm extends Component {
  submit = async (values) => {
    this.props.loading();
    const result = await this.props.register({ ...values, zip: this.props.zip });

    if (result.success) {
      toast(<WelcomeNotification name={result.user.first} />);
    }
    this.props.handleOutcome(result);
  }

  render() {
    const { handleSubmit, button, disabled, focusOn } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.submit)}>
        <Input name="email" autofocus={focusOn === 'email'} label="Email Address" type="email" disabled={disabled} />
        <Split>
          <Input autofocus={focusOn !== 'email'} name="first" label="Name" placeholder="First Name" disabled={disabled} />
          <Input name="last" label=" " placeholder="Last Name" disabled={disabled} />
        </Split>
        <Input name="password" label="Password" type="password" disabled={disabled} />
        <button disabled={disabled} className="button--highlight--full">
          {button('Complete Account')}
        </button>
      </Form>
    );
  }
}

const form = {
  form: 'createAccountForm',
  validate: (values) => {
    const validator = new FormValidation(values, {
      email: 'email|required',
      first: 'required~first name',
      last: 'required~last name',
      password: 'min:6|required',
    });

    return validator.getErrors();
  },
};

function map(state, { email }) {
  return { initialValues: { email } };
}

const mapDispatch = { register: authOperations.register };

export default connect(map, mapDispatch)(formBuilder(CompleteAccountForm, form));
