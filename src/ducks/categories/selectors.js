import moment from 'moment';

// given shopping, returns the timeslot id, or null if not yet set
const getTimeslotId = ({ timeslot }) => (
  timeslot ? (timeslot._id || timeslot.id) : null // eslint-disable-line
);

/**
 * Given the timeslot, returns the formatted delivery end time
 *   - Time is formatted as 2pm, etc.
 *   - Moment docs: https://momentjs.com/docs/#/displaying/calendar-time/
 */
function startTime({ deliveryStart }) {
  return moment(deliveryStart).format('ha');
}

/**
 * Given the timeslot, returns the formatted delivery start time
 *   - Time is formatted as 2pm, etc.
 *   - Moment docs: https://momentjs.com/docs/#/displaying/calendar-time/
 */
function endTime({ deliveryEnd }) {
  return moment(deliveryEnd).format('ha');
}

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
    nextWeek: 'dddd M/D',
    sameElse: '[next] dddd M/D',
  }))
);

export default {
  getTimeslotId,
  getDeliveryDay,
  startTime,
  endTime,
};
