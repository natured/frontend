import React from 'react';
import { connect } from 'react-redux';
import WalkthroughSegment from './WalkthroughSegment';
import WalkthroughSteps from './WalkthroughSteps';
import Delivery from '../../../account/AccountDetails/Delivery/Delivery';
import { Icon } from '../../../elements';

class WalkthroughDelivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: true };
  }

  componentDidMount() {
    if (this.props.delivery.formatted) {
      this.setState({ showForm: false });
    }
  }

  componentDidUpdate(nextProps) {
    if (this.props.delivery.formatted !== nextProps.delivery.formatted) {
      this.setState({ showForm: false });
    }
  }

  done = () => this.setState({ showForm: false });

  confirm = () => (
    <div>
      <WalkthroughSegment title="Your Address">
        {this.props.delivery.formatted}
      </WalkthroughSegment>

      <button className="button--light-blue next-button" onClick={this.props.next}>
        <span>Continue</span>  <Icon type="longArrowRight" />
      </button>
    </div>
  )

  render() {
    return (
      <div className="walkthrough">
        <h3 className="header--5">Add your delivery address</h3>
        {this.state.showForm ? <Delivery done={this.done} /> : this.confirm()}
        <WalkthroughSteps back={this.props.back} canSkip={false} />
      </div>
    );
  }
}

const mapState = ({ account }) => ({ delivery: account.delivery });
export default connect(mapState)(WalkthroughDelivery);
