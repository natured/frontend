import React from 'react';
import { connect } from 'react-redux';
import { injectStripe } from 'react-stripe-elements';
import { Form } from 'redux-form';
import { accountOperations } from '../../../../ducks/account';
import { Input } from '../../../elements';
import { FormValidation, formBuilder } from '../../../forms';
import StripePaymentField from '../Stripe/StripePaymentField';

class PaymentMethodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  handleError(error) {
    this.setState({ error });
    this.props.error();
  }

  handleSuccess = () => {
    this.props.reset();
    this.props.ready();
    this.props.hide();
  }

  handleResponse = ({ success, errorMessage }) => {
    if (success) {
      this.handleSuccess();
    } else {
      this.handleError(errorMessage);
    }
  }

  resetError = () => {
    this.setState({ error: false });
  }

  submit = async ({ cardholder }) => {
    this.props.loading();
    const { token } = await this.props.stripe.createToken({ name: cardholder });
    if (token) {
      this.handleResponse(await this.props.addPayment(token, cardholder));
    } else { this.handleError('There was an error adding your card.'); }
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Input
          type="text"
          name="cardholder"
          label="Name on Card"
          placeholder="Cardholder"
          disabled={this.props.disabled}
        />
        <StripePaymentField
          disabled={this.props.disabled}
          error={this.state.error}
          resetError={this.resetError}
        />
        <button disabled={this.props.disabled} className="button--reg--white">
          {this.props.button('Add Card')}
        </button>
      </Form>
    );
  }
}

const form = {
  form: 'addPayment',
  validate: (values) => {
    const validator = new FormValidation(values, { cardholder: 'required' });
    return validator.getErrors();
  },
};

const mapState = ({ account }) => {
  const { first, last } = account.contact;
  return { initialValues: { cardholder: `${first} ${last}` } };
};


export default connect(mapState, { addPayment: accountOperations.addPayment })(
  injectStripe(formBuilder(PaymentMethodForm, form)),
);
