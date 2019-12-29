import React, { Component } from 'react';
import { CardElement } from 'react-stripe-elements';
import './stripeInput.scss';

class PaymentField extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  /**
   * If there is an error passed down from the form,
   *   update the state to reflect that error.
   */
  componentDidUpdate(props) {
    if (props.error && props.error !== this.state.error) {
      this.setState({ error: props.error });
    }
  }

  /**
   * When a change is made, check for errors
   *   - If there is an error, set the error to be its message
   *   - Otherwise, just set it to false
   */
  change = ({ error }) => {
    this.setState({ error: error ? error.message : false });
    this.props.resetError();
  }

  /**
   * Display the error from state, if there is one
   */
  renderError() {
    if (!this.state.error || this.props.disabled) { return null; }
    return <div className="error">{this.state.error}</div>;
  }

  /**
   * Renders the stripe input element
   *   - Handles styling the input
   */
  renderInput() {
    return (
      <CardElement
        hidePostalCode
        onChange={this.change}
        disabled={this.props.disabled}
        style={{
          base: {
            color: 'rgba(0, 0, 0, 0.65)',
            fontSize: '16px',
            fontFamily: 'Proxima Nova, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            '::placeholder': { color: '#c6c6c6' },
            ':disabled': { color: 'rgba(0,0,0,0.25)' },
          },
        }}
      />
    );
  }

  render() {
    const error = this.state.error ? 'has-error' : '';
    const disabled = this.props.disabled ? 'is-disabled' : '';

    return (
      <div className={`input-group ${error} ${disabled}`}>
        <label>Card Information</label>
        {this.renderInput()}
        {this.renderError()}
      </div>
    );
  }
}

export default PaymentField;
