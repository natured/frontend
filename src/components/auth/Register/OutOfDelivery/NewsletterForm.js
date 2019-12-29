import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { Input, Icon } from '../../../elements';
import { FormValidation, formBuilder } from '../../../forms';
import { appOperations } from '../../../../ducks/app';

class NewsletterForm extends Component {
  submit = async ({ email }) => {
    this.props.loading();
    await this.props.deliveryRequest(this.props.zip, email);
    this.props.success();
  }

  render() {
    const { handleSubmit, button, disabled } = this.props;

    if (this.props.formStatus === 'success') {
      return (
        <div style={{ padding: '15px 0' }}>
          <Icon type="badgeCheck" size="2x" className="success" />
        </div>
      );
    }

    return (
      <Form onSubmit={handleSubmit(this.submit.bind(this))} className="inline-form input-and-button">
        <Input autofocus name="email" placeholder="Your Email" label="Email Address" type="email" disabled={disabled} />
        <button disabled={disabled} className="button--slate-gray--reg">
          {button('Submit')}
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
const mapDispatch = { deliveryRequest: appOperations.deliveryRequest };
export default connect(mapState, mapDispatch)(formBuilder(NewsletterForm, form));
