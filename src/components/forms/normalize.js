/**
 * Definitions of normalizers
 *   - Each given initial value, returns normalized value
 */
const zipCode = value => (value.replace(/[^0-9]/g, '').substring(0, 5));

// normalizes a phone number
const phoneNumber = (value) => {
  if (value) {
    const country = '+1';
    // to start, strip it down just to the numbers the user entered
    // i.e. +1 781 361 2224 -> 7813612224
    const numerical = (value.replace(country, '')).replace(/[^0-9]/g, '');

    // splits into the area code, the prefix and the line numbers
    const area = numerical.substring(0, 3);
    const prefix = numerical.substring(3, 6);
    const line = numerical.substring(6, 10);

    // returns only the subset based on the length of the number
    // this ensures spaces shown only when needed
    if (numerical.length <= 3) { return `${country} ${area}`; }
    if (numerical.length <= 6) { return `${country} ${area} ${prefix}`; }
    return `${country} ${area} ${prefix} ${line}`;
  }
};

/**
 * Returns the normalization handler for each type
 */
const handler = (type) => {
  if (type === 'zip') { return zipCode; }
  if (type === 'phone') { return phoneNumber; }
  return null;
};

// Named exportes for helpers
export default { phoneNumber, handler };
