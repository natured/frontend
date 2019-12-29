import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { Input } from '../../../elements';
import { Split, formBuilder, FormValidation } from '../../../forms';
import { cartOperations } from '../../../../ducks/cart';

class DiscountCodeForm extends React.Component {
  submit = async ({ code }) => {
    this.props.loading();
    const status = await this.props.applyCode(code);
    if (!status.success) { // handles error applying code
      this.props.handleError(status.errors);
    } else { // handles success
      this.props.hide();
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Split width="70">
          <Input
            name="code"
            size="small"
            placeholder="Enter code"
            disabled={this.props.disabled}
          />
          <button className="button--white--small--full" disabled={this.props.disabled}>
            {this.props.button('Apply')}
          </button>
        </Split>
      </Form>
    );
  }
}

const form = {
  form: 'discountCodeForm',
  validate: (values) => {
    const validator = new FormValidation(values, { code: 'required' });
    return validator.getErrors();
  },
};
const mapDispatch = { applyCode: cartOperations.applyCode };
export default connect(null, mapDispatch)(formBuilder(DiscountCodeForm, form));
