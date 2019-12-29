import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { accountOperations } from '../../../../ducks/account';
import { Input } from '../../../elements';
import { FormValidation, formBuilder, normalize } from '../../../forms';
import PhoneLabel from './PhoneLabel';

class PhoneNumberForm extends Component {
  submit = async ({ phone }) => {
    this.props.loading();
    if (this.props.pristine) {
      this.props.ready();
    } else {
      await this.props.updatePhone(phone);
      this.props.ready();
    }
  }

  renderButton = () => {
    if (!this.props.pristine || !this.props.phone) {
      return (
        <button className="button--white account-section-bottom">
          {this.props.button('Update Phone')}
        </button>
      );
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Input
          name="phone"
          type="tel"
          label={(<PhoneLabel />)}
          placeholder="Phone Number"
          normalize="phone"
          disabled={this.props.disabled}
        />
        {this.renderButton()}
      </Form>
    );
  }
}

const form = {
  form: 'phoneNumberForm',
  enableReinitialize: true,
  validate: (values) => {
    const validator = new FormValidation(values, { phone: 'phone|required' });
    return validator.getErrors();
  },
};

const mapState = ({ account }) => {
  const { phone, phoneValidated } = account.contact;
  return {
    phone,
    phoneValidated,
    initialValues: { phone: phone ? normalize.phoneNumber(phone) : '' },
  };
};

const mapDispatch = { updatePhone: accountOperations.updatePhone };

export default connect(mapState, mapDispatch)(formBuilder(PhoneNumberForm, form));
