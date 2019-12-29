// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { PageView } from '../../../services/Analytics';
// import page from '../page';
// import { updateFormStep } from '../../actions';
// import RequireUnauth from '../../../components/auth/AuthHelpers/RequireUnauth';
// import LoginContainer from '../../../components/auth/Login/LoginContainer';
//
// class LoginPage extends Component {
//   static head = () => ({ title: 'Login', robots: 'noindex, nofollow' });
//
//   componentWillMount() {
//     PageView.track('Auth', 'Login');
//   }
//
//   render() {
//     return (
//       <div key="registration" className="register-page">
//         <div className="register-form-holder">
//           <div className="register-form-container">
//             <LoginContainer />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default {
//   component: connect(null, { updateFormStep })(RequireUnauth(page(LoginPage))),
// };
