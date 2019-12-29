import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { appOperations } from '../../../../ducks/app';
import { accountOperations } from '../../../../ducks/account';
import { Notification, Icon } from '../../../elements';

class WalkthroughButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  update = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
      await this.props.addToCart(1);
      this.setState({ loading: false });
    }
  }

  successNotification = () => (
    <Notification type="success">
      <div className="title">Your account is complete!</div>
      <div className="content">
        We’ve added {this.props.product.name} to your cart.
      </div>
    </Notification>
  )

  handleComplete = async () => {
    await this.update();
    toast(this.successNotification());
    this.props.toggleModal('walkthrough', false);
    this.props.completeWalkthrough();
  }

  show = () => {
    this.props.toggleModal('walkthrough', true, {
      complete: this.handleComplete,
    });

    // const { product } = this.props;
    // Analytics.track('OPENS_ACCOUNT_MODAL', {
    //   productId: product.id,
    //   productName: product.name,
    //   productImg: product.img,
    //   productUrl: `https://natured.co/boston/market/${product.foodmaker.slug}/${product.slug}`,
    //   foodmakerId: product.foodmaker.id,
    //   categoryId: product.category.id,
    //   categoryName: product.category.name,
    // });
  }

  render() {
    return (
      <div className="add-to-cart add" onClick={this.show}>
        <span>{this.props.children || 'Add'}</span>
        <span className="add-icon"><Icon type="fatPlus" /></span>
      </div>
    );
  }
}

const mapDispatch = {
  toggleModal: appOperations.toggleModal,
  completeWalkthrough: accountOperations.completeWalkthrough,
};
export default connect(null, mapDispatch)(WalkthroughButton);
