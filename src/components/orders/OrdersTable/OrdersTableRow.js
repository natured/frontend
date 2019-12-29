import React from 'react';
import { connect } from 'react-redux';
import { ordersSelectors } from '../../../ducks/orders';
import OrderLink from '../OrderLink';
import OrderReference from '../OrderDetails/OrderReference';
import OrderDate from '../OrderDetails/OrderDate';
import OrderStatus from '../OrderDetails/OrderStatus';
import OrderAmount from '../OrderDetails/OrderAmount';

class OrdersTableRow extends React.Component {
  render() {
    if (!this.props.order) { return null; }

    return (
      <OrderLink order={this.props.order} className="orders-table-row">
        <div>
          <OrderReference order={this.props.order} />
          <div>
            <div className="order-date-label">Date</div>
            <OrderDate order={this.props.order} format="MMM Do, YYYY" />
          </div>
        </div>
        <div>
          <div>
            <div className="order-amount-label">Amount</div>
            <OrderAmount order={this.props.order} />
          </div>
          <div>
            <div className="order-status-label">Status</div>
            <OrderStatus order={this.props.order} />
          </div>
        </div>
      </OrderLink>
    );
  }
}

const mapState = ({ orders }, { orderId }) => ({
  order: ordersSelectors.getOrderById(orders, orderId),
});

export default connect(mapState)(OrdersTableRow);
