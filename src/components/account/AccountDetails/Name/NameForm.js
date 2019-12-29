import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { accountOperations } from '../../../../ducks/account';
import { Input } from '../../../elements';
import { Split, FormValidation, formBuilder } from '../../../forms';

class NameForm extends Component {
  submit = async ({ first, last }) => {
    if (!this.props.pristine) {
      this.props.loading();
      const result = await this.props.updateName(first, last);
      if (!result.success) {
        this.props.handleError(result.errors);
      } else {
        this.props.ready();
      }
    }
  }

  button = () => (
    <button type="submit" disabled={this.props.disabled} className="button--reg--white account-section-bottom">
      {this.props.button('Update Name')}
    </button>
  )

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Split>
          <Input
            name="first"
            label="Name"
            placeholder="First Name"
            disabled={this.props.disabled}
          />
          <Input
            name="last"
            label=" "
            placeholder="Last Name"
            disabled={this.props.disabled}
          />
        </Split>
        {this.button()}
      </Form>
    );
  }
}

const form = {
  form: 'updateNameForm',
  enableReinitialize: true,
  validate: (values) => {
    const rules = { first: 'required', last: 'required' };
    const validator = new FormValidation(values, rules);
    return validator.getErrors();
  },
};


const mapDispatch = {
  updateName: accountOperations.updateName,
};

export default connect(null, mapDispatch)(formBuilder(NameForm, form));
