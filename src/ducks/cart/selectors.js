const formatPrice = (value) => (`$${(value / 100).toFixed(2)}`);
const formatUnfixedPrice = (value) => (`$${value / 100}`);

// Given the cartState, checks if the cart is empty
function isEmpty({ cart }) {
  return cart ? cart.count <= 0 : true;
}

// Given the cartState, returns the cart count
function getCount({ cart }) {
  return cart ? cart.count : 0;
}

/**
 * Boolean check if there are items to show in cart
 *   - Returns true if there are items to show w/qty > 0
 */
function hasItems({ cart }) {
  return cart ? cart.count > 0 : false;
}

const getItems = ({ cart }) => {
  if (!cart) { return null; }

  return cart.items.reduce((itemsByAvailability, item) => {
    if (item.quantity > 0) {
      // const type = item.available ? 'available' : 'unavailable';
      itemsByAvailability.available.push(item);
    }

    return itemsByAvailability;
  }, { available: [], unavailable: [] });
};


/**
 * Boolean check if there are items to show in cart
 *   - Returns true if there are items to show w/qty > 0
 */
function items({ cart }) {
  return cart.items;
}

/**
 * Retrieves and formats the total of the cart
 */
function subtotal({ cart }) {
  return cart && cart.pricing ? formatPrice(cart.pricing.subtotal) : null;
}

/**
 * Retrieves and formats the total of the cart
 */
const amountOff = ({ cart }) => {
  if (cart && cart.pricing && cart.pricing.amountOff > 0) {
    return `-${formatPrice(cart.pricing.amountOff)}`;
  }
  return null;
};

/**
 * Returns delivery line item
 *   - Returns the cost of delivery formatted as a price
 *   - or if delivery is free, returns 'FREE'
 */
function delivery({ cart }) {
  if (cart) {
    return cart.pricing.deliveryCost ? formatPrice(cart.pricing.deliveryCost) : 'FREE';
  }
}

/**
 * Returns bottle line item
 *   - Returns the bottle cost as a price
 *   - or if no bottle cost, returns nulls
 */
function bottles({ cart }) {
  if (cart) {
    const { bottleCost } = cart.pricing;
    return bottleCost ? formatPrice(bottleCost) : null;
  }
}

/**
 * Returns the amount of credit remaining (after application of credit)
 *   - Returns either the remaining credit as a price
 *   - or if none, returns null
 */
function creditRemaining({ cart }) {
  if (cart) {
    const { remainingCredit } = cart.pricing;
    return remainingCredit ? formatPrice(remainingCredit) : null;
  }
}

/**
 * Returns the amount of credit applied
 *   - Returns either the applied credit as a price
 *   - or if none, returns null
 */
function appliedCredit({ cart }) {
  if (cart) {
    return cart.pricing.appliedCredit ? formatPrice(cart.pricing.appliedCredit) : null;
  }
}

/**
 * Retrieves and formats the total of the cart
 */
function total({ cart }) {
  return cart.pricing ? formatPrice(cart.pricing.total) : null;
}

/**
 * Returns the auth amount
 *   - If auth amount is different than total, returns it formatteds
 *   - if the amount is the same, return null
 */
function auth({ cart }) {
  if (cart && cart.pricing.authorization !== cart.pricing.total) {
    return formatPrice(cart.pricing.authorization);
  }

  return null;
}

/**
 * Calculates a percentage amount of progress completed
 *   - Using the subtotal and the delivery threshold from pricing
 *   - Calculates a percentage
 *   - Returns a percentage between 2% and 100%
 */
function progress({ cart }) {
  if (cart && cart.pricing) {
    const percentage = cart.pricing.subtotal / cart.pricing.deliveryThreshold * 100;
    if (percentage >= 100) { return '100%'; }
    if (percentage > 2) { return `${percentage}%`; }
  }

  return '2%'; // Defaulted to 2%
}

/**
 * Boolean check of free delivery or not
 *   - Given the cart, checks whether free delivery has been activated
 */
function hasFreeDelivery({ cart }) {
  return cart ? cart.pricing.deliveryCost === 0 : false;
}

/**
 * Amount away from free delivery
 *   - Given the cart, calculates how far away from free delivery
 *   - Returns as a formatted price
 */
function fromFreeDelivery({ cart }) {
  return cart ? formatUnfixedPrice(cart.pricing.deliveryRemaining) : '$50';
}

// get discount code from cart
const tax = ({ cart }) => (
  cart && cart.pricing.tax ? formatPrice(cart.pricing.tax) : null
);

// given cart and productId, returns number in cart
const getCartedQuantity = ({ byProduct }, productId) => (
  productId in byProduct ? byProduct[productId].quantity : 0
);

// given cart, checks if we've fetched a cart (if not false)
const checkedForCart = ({ cart }) => (
  cart !== false
);

// get discount code from cart
const getDiscount = ({ cart }) => (
  cart ? cart.discount : null
);

export default {
  isEmpty,
  getCount,
  hasItems,
  getItems,
  items,
  subtotal,
  delivery,
  bottles,
  amountOff,
  creditRemaining,
  appliedCredit,
  tax,
  total,
  auth,
  progress,
  getDiscount,
  hasFreeDelivery,
  fromFreeDelivery,
  getCartedQuantity,
  checkedForCart,
};
