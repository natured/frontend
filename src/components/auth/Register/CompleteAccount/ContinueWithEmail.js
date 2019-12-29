import React from 'react';
import CompleteAccountForm from './CompleteAccountForm';
import { Icon } from '../../../elements';
import './continue.scss';

class ContinueWithEmail extends React.Component {
  state = { showForm: false };

  click = async () => {
    // Analytics.track('CLICKED_CONTINUE_WITH_EMAIL_REGISTERING');
    this.setState({ showForm: true });
  }

  renderBottom = () => {
    if (this.state.showForm) {
      return (
        <div className="complete-account-form">
          <CompleteAccountForm focusOn="email" zip={this.props.zip} />
        </div>
      );
    }

    return (
      <button onClick={this.click} className="button--midnight--full continue-button">
        Continue with Email
      </button>
    );
  }

  value = (icon, message) => (
    <div key={icon} className="natured-value">
      <Icon type={icon} /> {message}
    </div>
  )

  renderValues = () => {
    if (!this.state.showForm) {
      return (
        <div style={{ paddingTop: '30px' }}>
          {this.value('truck', 'Free delivery on orders over $50')}
          {this.value('redo', 'Subscribe to your favorite local staples')}
          {this.value('basket', 'Shop until midnight before your delivery')}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="zip-check">
        <div style={{ width: '100%' }}>
          <h1 className="header--3">
            Good news! <br /> We deliver to {this.props.zip}.
          </h1>
          {this.renderValues()}
        </div>
        {this.renderBottom()}
      </div>
    );
  }
}

export default ContinueWithEmail;
