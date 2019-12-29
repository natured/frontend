import React from 'react';
import { connect } from 'react-redux';
import { appOperations, appSelectors } from '../../../ducks/app';
import './modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { everOpened: false };
  }

  // tracks whether this is the first time opening the modal
  componentWillUpdate(nextProps) {
    if (!this.state.everOpened && nextProps.show) {
      this.setState({ everOpened: true });
    }

    if (this.props.show !== nextProps.show) {
      document.body.classList.toggle('overflow-hidden', nextProps.show);
    }
  }

  componentWillUnmount() {
    document.body.classList.toggle('overflow-hidden', false);
  }

  clickOverlay = () => {
    this.props.toggleModal(this.props.name, false);
  }

  // delay rendering content until opening for the first time
  content = () => {
    if (this.state.everOpened) {
      return React.cloneElement(this.props.children, { modalParam: this.props.param });
    }
  }

  render() {
    return (
      <div className={`modal ${this.props.show ? 'show' : 'hide'}`}>
        <div className="modal-overlay" onClick={this.clickOverlay} />
        <div className="modal-content">
          {this.content()}
        </div>
      </div>
    );
  }
}

const mapState = ({ app }, { name }) => ({
  show: appSelectors.showModal(app, name),
  param: appSelectors.modalData(app, name),
});

const mapDispatch = { toggleModal: appOperations.toggleModal };

export default connect(mapState, mapDispatch)(Modal);
