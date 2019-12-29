import React, { Component } from 'react';
// import { PageView } from '../../../services/Analytics';
import page from '../page';
import PasswordResetSection from '../../components/auth/Password/PasswordReset/PasswordResetSection';
import hasPasswordResetToken from '../../components/auth/Password/PasswordReset/hasPasswordResetToken';

class PasswordResetPage extends Component {
  static head = () => ({ title: 'Reset Your Password', robots: 'noindex, nofollow' });


  render() {
    return (
      <div key="registration" className="register-page">
        <div className="register-form-holder">
          <div className="register-form-container">
            <PasswordResetSection />
          </div>
        </div>
      </div>
    );
  }
}

export default {
  component: hasPasswordResetToken(page(PasswordResetPage)),
};
