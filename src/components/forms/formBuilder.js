import React, { Component } from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import { Icon } from '../elements';

export default (ChildComponent, form) => {
  class FormBuilder extends Component {
    constructor(props) {
      super(props);
      this.state = { status: 'ready' };
    }

    /**
     * Methods for handling form status updates
     *   - Form status is one of the following:
     *     ['ready', 'loading', 'success', 'error']
     */
    update = (status) => { this.setState({ status }); }

    ready = () => { this.update('ready'); }

    loading = () => { this.update('loading'); }

    success = () => { this.update('success'); }

    error = () => { this.update('error'); }

    sleep = (ms = 0) => (new Promise(r => setTimeout(r, ms)));

    /**
     * Handles outcome from an action
     *   - Given the result of the action: which has a boolean success flag,
     *     and if unsuccessful, an errors object
     *   - Given optional handlers for success and error
     */
    handleOutcome = ({ success, errors, data }, onSuccess = null, onError = null) => {
      if (success) {
        this.handleSuccess(data, onSuccess);
      } else {
        this.handleError(errors, onError);
      }
    }

    /**
     * Handles form success
     *   - Resets the form and status, invokes handler if set
     */
    handleSuccess = (data, onSuccess) => {
      this.ready();
      this.props.reset();
      if (onSuccess) { onSuccess(data); }
    }

    /**
     * Handles form error
     *   - Updates status, invokes handler if set, throws submission errors
     */
    handleError = (errors, onError) => {
      this.error();
      if (onError) { onError(errors); }
      if (errors) { throw new SubmissionError(errors); }
    }

    /**
     * Helper to render text for a button
     */
    renderButton = (text) => {
      if (this.state.status === 'loading') { return 'Loading...'; }
      if (this.state.status === 'success') {
        return <Icon type="circleCheck" className="success" />;
      }

      return text;
    }

    render() {
      return (
        <ChildComponent
          {...this.props}
          formStatus={this.state.status}
          disabled={this.state.status === 'loading' || this.state.status === 'success'}
          loading={this.loading}
          ready={this.ready}
          error={this.error}
          success={this.success}
          sleep={this.sleep}
          button={this.renderButton}
          handleOutcome={this.handleOutcome}
          handleSuccess={this.handleSuccess}
          handleError={this.handleError}
          clearForm={this.clearForm}
        />
      );
    }
  }

  return reduxForm(form)(FormBuilder);
};
