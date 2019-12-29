import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { accountOperations } from '../../../../ducks/account';
import { Input } from '../../../elements';
import { Split, FormValidation, formBuilder } from '../../../forms';

class DeliveryForm extends React.Component {
  submit = async (address) => {
    this.props.loading();
    const result = await this.props.updateAddress(address);
    if (result.success) {
      this.props.success();
      await this.props.sleep(1000);
      this.props.ready();
      this.props.done();
    } else {
      this.props.handleError(result);
    }
  }

  button = () => {
    const className = 'button--reg--white account-section-bottom';
    return (
      <button type="submit" disabled={this.props.disabled} className={className}>
        {this.props.button('Update Address')}
      </button>
    );
  }

  label = () => (
    <div className="flex-out">
      <span>Street Address</span>
      <div onClick={() => this.setState({ edit: true })}>Edit</div>
    </div>
  )

  render() {
    const { disabled } = this.props;

    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Input
          name="street"
          label="Street Address"
          type="text"
          disabled={disabled}
        />
        <Input name="street2" label="Street Address #2" type="text" disabled={disabled} />

        <Split>
          <Input name="city" label="City" type="text" disabled={disabled} />
          <Input name="state" label="State" type="text" disabled={disabled} />
        </Split>

        <Input name="zip" label="Zip Code" type="text" normalize="zip" disabled={disabled} />
        <Input
          name="instructions"
          label="Special delivery instructions"
          component="textarea"
          disabled={disabled}
        />
        {this.button()}
      </Form>
    );
  }
}

const form = {
  form: 'updateDelivery',
  enableReinitialize: true,
  validate: (values) => {
    const validator = new FormValidation(values, {
      street: 'required',
      city: 'required',
      state: 'required',
      zip: 'required',
    });
    return validator.getErrors();
  },
};

const mapState = ({ account }) => ({
  initialValues: { ...account.delivery },
});

const mapDispatch = { updateAddress: accountOperations.updateAddress };

export default connect(mapState, mapDispatch)(formBuilder(DeliveryForm, form));
