import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { authOperations } from '../../../ducks/auth';
import { Input } from '../../elements';
import formBuilder from '../formBuilder';
import FormValidation from '../FormValidation';

class LoginForm extends Component {
  submit = async ({ email, password }) => {
    this.props.loading();
    const result = await this.props.login({ email, password });
    if (!result.success) { this.props.handleError(result.errors); }
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Input
          name="email"
          type="email"
          label="Email Address"
          disabled={this.props.disabled}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          disabled={this.props.disabled}
        />

        <button type="submit" disabled={this.props.disabled} className="button--orange--full">
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
