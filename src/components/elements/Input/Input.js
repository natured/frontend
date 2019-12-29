import React from 'react';
import { Field as FormField } from 'redux-form';
import { normalize } from '../../forms';
import Label from './Label/Label';
import Error from './Error/Error';
import './input.scss';

/**
 * Props accepted:
 *
 *   name (required)
 *   type (optional)
 *   placeholder (optional)
 *   label (optional)
 */
class Input extends React.Component {

  renderInput = (component, input) => {
    const props = {
      ...input,
      id: this.props.id,
      className: this.props.className,
      autoFocus: this.props.autofocus,
      type: (this.props.type || 'text'),
      placeholder: this.props.placeholder || this.props.label,
      disabled: this.props.disabled ? 'disabled' : '',
    };

    if (component === 'textarea') {
      return <textarea {...props} rows="3" />;
    }

    return <input {...props} />;
  }

  renderField = ({ input, meta }) => (
    <div className={`field ${meta.touched && meta.error ? 'has-error' : ''}`}>
      <Label name={this.props.name}>
        {this.props.label || this.props.placeholder}
      </Label>
      {this.renderInput(this.props.component, input)}
      <Error hasError={meta.touched && meta.error} error={meta.error} />
    </div>
  )

  render() {
    return (
      <FormField
        name={this.props.name}
        disabled={this.props.disabled}
        normalize={normalize.handler(this.props.normalize)}
        onChange={this.props.onChange}
        component={this.renderField}
        value={this.props.defaultValue}
      />
    );
  }
}

export default Input;
