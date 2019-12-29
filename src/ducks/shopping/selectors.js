import moment from 'moment';

// given shopping, returns the timeslot id, or null if not yet set
const getTimeslotId = ({ timeslot }) => (
  timeslot ? (timeslot._id || timeslot.id) : null
);

const getTimeslots = ({ timeslots }) => (timeslots);

/**
 * Given the timeslot, returns the formatted delivery end time
 *   - Time is formatted as 2pm, etc.
 *   - Moment docs: https://momentjs.com/docs/#/displaying/calendar-time/
 */
const startTime = ({ timeslot }) => (
  timeslot ? moment(timeslot.deliveryStart).format('ha') : null
);

/**
 * Given the timeslot, returns the formatted delivery start time
 *   - Time is formatted as 2pm, etc.
 *   - Moment docs: https://momentjs.com/docs/#/displaying/calendar-time/
 */
const endTime = ({ timeslot }) => (
  timeslot ? moment(timeslot.deliveryEnd).format('ha') : null
);

/**
 * Given the timeslot, returns formatted day
 *   - Uses delivery date to format on the calendar
 *   - Moment docs: https://momentjs.com/docs/#/displaying/calendar-time/
 */
const getDeliveryDay = ({ timeslot }) => (
  !timeslot ? null : (moment(timeslot.deliveryStart).calendar(null, {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: '[last] dddd',
    nextWeek: 'dddd, MMM D',
    sameElse: '[next] dddd, MMM D',
  }))
);

const getCutoffTime = ({ timeslot }) => {
  if (!timeslot) { return null; }
  const cutoff = moment(timeslot.customerShoppingCutoff).subtract(1, 'minute');
  return ` ${cutoff.format('ddd, MMM Do')} at ${cutoff.format('h:mma')}. `;
};

const deliveryDate = ({ timeslot }) => (
  timeslot ? moment(timeslot.deliveryStart).format('dddd, MMM Do') : null
);

const getDayOfWeek = ({ timeslot }) => (
  timeslot ? moment(timeslot.inventoryArrivalCutoff).format('dddd') : null
);

const getHour = ({ timeslot }) => (
  timeslot ? moment(timeslot.inventoryArrivalCutoff).format('h') : null
);

export default {
  getTimeslotId,
  getTimeslots,
  getDeliveryDay,
  startTime,
  endTime,
  getCutoffTime,
  deliveryDate,
  getDayOfWeek,
  getHour,
};
