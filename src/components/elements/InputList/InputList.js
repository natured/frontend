import React from 'react';
import { Icon } from '..';

class InputList extends React.Component {
  state = { values: [], value: '' };

  addValue = (value) => {
    if (value !== '') {
      const { values } = this.state;
      values.push(value);
      this.setState({ values });
      this.props.updateValues(values);
      this.reset();
    }
  }

  removeValue = (index) => {
    const { values } = this.state;
    values.splice(index, 1);
    this.setState({ values });
    this.props.updateValues(values);
    this.focus();
  }

  updateInput = (value) => {
    this.props.onChange(value);
    this.setState({ value });
  }

  reset = () => {
    this.updateInput('');
  }

  resetValues = () => {
    this.setState({ values: [] });
    this.props.updateValues([]);
    this.focus();
  }

  press = ({ key, target }) => {
    if (key === 'Enter' || key === 'Tab' || key === ' ') {
      this.addValue(target.value);
    }

    if (key === 'Backspace' && this.state.value === '') {
      this.removeValue(this.state.values.length - 1);
    }
  }

  change = ({ target }) => {
    this.updateInput(target.value);
  }

  delete = (email) => {
    this.removeValue(this.state.values.indexOf(email));
  }

  focus = () => {
    this.input.focus();
  }

  valid = email => (
    /\S+@\S+\.\S+/.test(email) ? 'valid' : 'invalid'
  )

  componentWillUpdate(nextProps) {
    if (nextProps.reset && !this.props.reset) {
      this.reset();
      this.resetValues();
    }
  }

  renderTags = () => (
    this.state.values.map(value => (
      <div className={`referral-email ${this.valid(value)}`}>
        <span className="email">
          {value}
        </span>
        <span className="referral-close" onClick={() => this.delete(value)}>
          <Icon type="close" />
        </span>
      </div>
    ))
  )

  render() {
    return (
      <div className={this.props.className}>
        {this.renderTags()}
        <input
          autoFocus
          type={this.props.type}
          ref={(input) => { this.input = input; }}
          onKeyDown={this.press}
          onChange={this.change}
          value={this.state.value}
          placeholder="Enter email addresses"
          className={this.state.values.length > 0 ? 'show-border' : ''}
        />
      </div>
    );
  }
}

export default InputList;
