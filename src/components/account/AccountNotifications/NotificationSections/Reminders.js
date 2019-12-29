import React from 'react';
import NotificationPreference from '../NotificationLayout/NotificationPreference';

class Reminders extends React.Component {
  render() {
    return (
      <div className="account-section-bottom">
        <NotificationPreference name="shoppingReminderSMS" description="Shopping Reminders">
          We’ll remind you to shop three days before your order arrives,
          so you don’t miss your favorite items.
        </NotificationPreference>
      </div>
    );
  }
}

export default Reminders;
