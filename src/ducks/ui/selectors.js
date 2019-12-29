// given subscriptions, checks the found boolean flag
const foundSubscriptions = ({ found }) => (found);

// checks if a product is subscribed to
const subscribed = ({ byProduct }, productId) => {
  if (productId in byProduct) {
    return byProduct[productId].quantity > 0;
  }
  return false;
};

const activeSubscriptions = ({ subscriptions }) => (
  subscriptions.filter(subscription => subscription.quantity > 0)
)

export default {
  foundSubscriptions,
  subscribed,
  activeSubscriptions,
};
