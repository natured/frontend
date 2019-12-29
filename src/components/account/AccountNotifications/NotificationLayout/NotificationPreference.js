import React from 'react';
import { Toggle } from '../../../elements';
import hasAccountNotifications from './hasAccountNotifications';
import './notificationPreference.scss';

class NotificationPreference extends React.Component {
  onClick = (value) => {
    this.props.updateToggle(this.props.name, value);
  }

  renderToggle = () => {
    if (this.props.notifications) {
      const value = this.props.notifications[this.props.name];
      return (
        <div className="animated fadeIn">
          <Toggle onClick={this.onClick} size="lg" value={value} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="notification-preference">
        <div className="descriptions">
          <div className="main-description">{this.props.description}</div>
          <div className="subdescription">{this.props.children}</div>
        </div>
        <div>
          {this.renderToggle()}
        </div>
      </div>
    );
  }
}

export default hasAccountNotifications(NotificationPreference);
