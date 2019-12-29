import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
// import { lookupZip } from '../../../../client/actions';
import { Input } from '../../../elements';
import { FormValidation, formBuilder } from '../../../forms';

class StartAccountForm extends Component {
  submit = async ({ email, zip }) => {
    this.props.loading();
    const result = await this.props.lookupZip({ email, zip });
    const { area } = result.data;
    const deliverable = area && area.deliver ? true : false; //eslint-disable-line
    this.props.handleOutcome(result, this.handleSuccess);
  }

  handleSuccess = ({ deliverable, email, area }) => {
    this.props.updateRegistration({ deliverable, email, zip: area.zip });
  }

  render() {
    const { handleSubmit, button, disabled } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Input name="zip" label="Zip Code" type="tel" normalize="zip" disabled={disabled} />
        <Input name="email" label="Email Address" type="email" disabled={disabled} />
        <button disabled={disabled} className="button--orange--full">
          {button('Continue')}
        </button>
      </Form>
    );
  }
}

const form = {
  form: 'zipEmailForm',
  validate: (values) => {
    const rules = { email: 'email|required', zip: 'length:5|required' };
    const validator = new FormValidation(values, rules);
    return validator.getErrors();
  },
};

const mapState = ({ user }) => ({ initialValues: { zip: user.zip } });
export default connect(mapState)(formBuilder(StartAccountForm, form));
