import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'redux-form';
import { Input } from '../../../elements';
import { FormValidation, formBuilder } from '../../../forms';
import { appOperations } from '../../../../ducks/app';

const formStyles = {
  padding: '.5rem 0 2rem 0',
  width: '100%',
  maxWidth: '380px',
};

class ZipCheckForm extends Component {
  submit = async ({ zip }) => {
    this.props.loading();
    const result = await this.props.zipCheck(zip, { page: 'home' });
    this.props.ready();
    const deliverable = result.area && result.area.deliver ? true : false; //eslint-disable-line
    this.props.updateRegistration({ deliverable, zip });
  }

  render() {
    const { handleSubmit, button, disabled } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.submit.bind(this))} style={formStyles}>
        <Input name="zip" placeholder="Zip Code" label="Enter your zip code to see if we deliver to you." type="tel" normalize="zip" disabled={disabled} />
        <button disabled={disabled} className="button--midnight--full">
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

// const mapState = ({ auth }) => ({ initialValues: { zip: auth .zip } });
const mapDispatch = { zipCheck: appOperations.zipCheck };
export default connect(null, mapDispatch)(formBuilder(ZipCheckForm, form));
