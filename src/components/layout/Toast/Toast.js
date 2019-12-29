import React from 'react';
import { ToastContainer } from 'react-toastify';
import Sticky from '../Sticky/Sticky';
import './toast.scss';

class Toast extends React.Component {
  render() {
    return (
      <Sticky className="toast">
        <ToastContainer
          hideProgressBar
          closeButton={false}
          className="toast-container"
          toastClassName="toasty"
          bodyClassName="toasty-body"
        />
      </Sticky>
    );
  }
}

export default Toast;
