import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { toast } from 'react-toastify';
import WelcomeBackNotification from '../Notifications/WelcomeBackNotification';
import { authOperations } from '../../../ducks/auth';
import { Input } from '../../elements';
import { FormValidation, formBuilder } from '../../forms';

// Definition of fields
const fields = {
  email: { name: 'email', type: 'email', label: 'Email Address' },
  password: { name: 'password', type: 'password', label: 'Password' },
};

class LoginForm extends Component {
  submit = async ({ email, password }) => {
    this.props.loading();
    const result = await this.props.login({ email, password });
    if (result.success) {
      toast(<WelcomeBackNotification name={result.user.first} />);
    }
    this.props.handleOutcome(result);
  }

  render() {
    const universal = { disabled: this.props.disabled };
    const handleChange = (e, value) => this.props.updateEmail(value);

    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Input {...fields.email} {...universal} onChange={handleChange} />
        <Input {...fields.password} {...universal} />
        <button {...universal} className="button--orange--full">
          {this.props.button('Login')}
        </button>
      </Form>
    );
  }
}

const form = {
  form: 'loginForm',
  enableReinitialize: true,
  validate: (values) => {
    const rules = { email: 'email|required', password: 'required' };
    const validator = new FormValidation(values, rules);
    return validator.getErrors();
  },
};

const mapState = (state, { email }) => ({ initialValues: { email } });
const mapDispatch = { login: authOperations.login };
export default connect(mapState, mapDispatch)(formBuilder(LoginForm, form));
