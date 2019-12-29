import React from 'react';
import Icon from '../Icon/Icon';
import './toggle.scss';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: props.value };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ toggled: nextProps.value });
    }
  }

  onClick = () => {
    // only preform if not disabled
    if (!this.props.disabled) {
      if (this.props.onClick) {
        this.props.onClick(!this.state.toggled);
      }
      this.setState({ toggled: !this.state.toggled });
    }
  }

  render() {
    const toggleType = this.props.type || 'toggle';
    const type = this.state.toggled ? `${toggleType}On` : `${toggleType}Off`;
    const className = `toggle ${this.state.toggled ? 'on' : 'off'}`;
    return (
      <div onClick={this.onClick} className={className}>
        <Icon type={type} size={this.props.size || '2x'} />
      </div>
    );
  }
}

export default Toggle;
