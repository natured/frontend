import React from 'react';
import { connect } from 'react-redux';
import { ordersSelectors } from '../../../ducks/orders';
import NoOrders from './NoOrders';
import OrdersTableRow from './OrdersTableRow';

class OrdersTableResults extends React.Component {
  render() {
    if (!this.props.orders) { return null; }

    if (this.props.orders.length === 0) { return <NoOrders />; }

    return (
      <div className="orders-table-results">
        {this.props.orders.map(orderId => (
          <OrdersTableRow key={orderId} orderId={orderId} />
        ))}
      </div>
    );
  }
}

const mapState = ({ orders }, { page }) => ({
  orders: ordersSelectors.getTableResults(orders, page),
});

export default connect(mapState)(OrdersTableResults);
