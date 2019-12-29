import React from 'react';
import { connect } from 'react-redux';
import { ordersOperations, ordersSelectors } from '../../../ducks/orders';
import { Segment, Dimmer } from '../../elements';
import OrdersTableResults from './OrdersTableResults';
import './ordersTable.scss';

class OrdersTable extends React.Component {
  state = { loading: true };

  componentWillMount() {
    this.getOrders(this.props.page || 1);
  }

  getOrders = async (page = 1) => {
    this.setState({ loading: true });
    await this.props.getOrders(page);
    this.setState({ loading: false });
  }

  canGoBack = () => (this.props.page > 1)

  canGoNext = () => (this.props.page < this.props.pages)

  next = () => {
    if (this.canGoNext()) {
      this.getOrders(this.props.page + 1);
    }
  }

  back = () => {
    if (this.canGoBack()) {
      this.getOrders(this.props.page - 1);
    }
  }


  render() {
    if (this.props.loading) { return null; }

    return (
      <Segment className="orders-table">
        <Dimmer active={this.state.loading} showIcon={false} />
        <OrdersTableResults page={this.props.page} />
        <div className="pagination">
          <button disabled={!this.canGoBack()} onClick={this.back} className="button--small">Back</button>
          {this.props.page} / {this.props.pages}
          <button disabled={!this.canGoNext()} onClick={this.next} className="button--small">Next</button>
        </div>
      </Segment>
    );
  }
}

const mapState = ({ orders }) => (ordersSelectors.getTable(orders));
const mapDispatch = { getOrders: ordersOperations.getOrders };
export default connect(mapState, mapDispatch)(OrdersTable);
