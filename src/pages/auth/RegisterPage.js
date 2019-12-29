import React, { Component } from 'react';
// import { PageView } from '../../../services/Analytics';
import page from '../page';
import RequireUnauth from '../../components/auth/AuthHelpers/RequireUnauth';
import RegisterContainer from '../../components/auth/Register/RegisterContainer';

class RegisterPage extends Component {
  static head = () => ({ title: 'Create Account' });

  componentDidMount() {
    // PageView.track('Auth', 'Register');
  }

  render() {
    return (
      <div key="registration" className="register-page">
        <div className="register-form-holder">
          <div className="register-form-container">
            <RegisterContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default {
  component: (RequireUnauth(page(RegisterPage))),
};
