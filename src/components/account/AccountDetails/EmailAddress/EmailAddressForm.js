import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { Input, Icon } from '../../../elements';
import { FormValidation, formBuilder } from '../../../forms';
import ResendConfirmationLink from './ResendConfirmationLink';

class EmailAddress extends Component {
  label = () => {
    if (!this.props.emailValidated) {
      return (
        <div className="flex-out">
          <span>Email</span>
          <ResendConfirmationLink />
        </div>
      );
    }

    return <span>Email Address &nbsp; <Icon type="badgeCheck" className="success" /></span>;
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="Email"
          disabled={true}
        />
      </Form>
    );
  }
}


const form = {
  form: 'updateEmail',
  enableReinitialize: true,
  validate: (values) => {
    const validator = new FormValidation(values, { email: 'email|required' });
    return validator.getErrors();
  },
};

const mapState = (state, { email }) => ({ initialValues: { email } });
export default connect(mapState)(formBuilder(EmailAddress, form));
