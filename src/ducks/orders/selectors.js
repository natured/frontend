// returns table data about pages and totals
const getTable = ({ table }) => ({
  page: table.page,
  pages: table.pages,
  total: table.total,
});

// returns list of order ids for that page
const getTableResults = ({ ordersByPage }, page) => (
  page ? ordersByPage[page] : null
);

const getOrderById = ({ ordersById }, orderId) => (
  ordersById[orderId] || null
);

export default {
  getTable,
  getTableResults,
  getOrderById,
};
