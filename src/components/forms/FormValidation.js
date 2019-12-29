/**
 * Helper class to validate form values
 *   - Given a set of values and rules, returns an errors object
 *
 *   - The set of form values (vals) is an object such as
 *       {
 *         email: 'aksjdas',
 *         name: 'Lexi'
 *       }
 *
 *   - The set of rules to use for validation is an object such as
 *       {
 *         email: 'required|email',
 *         name: 'required|min:2',
 *       }
 *
 *   - Returns a set of errors in the format:
 *     {
 *       field: error message
 *       ...
 *     }
 */
export default function validate(formValues, validationRules) {
  // Character to split rules by
  const RULE_SPLIT = '|';

  // Character to split the parameter from the rule
  const PARAM_SPLIT = ':';

  // Initialize errors to an empty object
  const errors = {};

  // Stores the values + rules for future use
  const values = formValues;
  const rules = validationRules;

  /**
   * Function to calculate and return errors
   *   - Iterates over each field and each rule
   *   - Calls the associated validation method w/the field and value
   *   - After validation, returns the errors object
   */
  this.getErrors = () => {
    Object.keys(rules).forEach((field) => {
      const [remainder, messageName] = rules[field].split('~');
      const value = values[field];
      remainder.split(RULE_SPLIT).forEach((req) => {
        const [name, params] = req.split(PARAM_SPLIT);
        const fn = `is${name.charAt(0).toUpperCase() + name.slice(1)}`;
        if (typeof this[fn] === 'function') {
          this[fn](field, value, params, messageName, values);
        }
      });
    });

    return errors;
  };


  /**
   * DEFINITION OF RULES
   *
   *   required    => The field must be defined
   *   email       => the field must be a valid email
   *   min:length  => The field must be of size greater than or equal to length
   *
   */

  // Must exist
  this.isRequired = (field, value, param, messageName) => {
    if (!value) { errors[field] = `Please enter a ${messageName || field}.`; }
  };

  // Must be a valid email
  this.isEmail = (field, value) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors[field] = 'Please enter a valid email.';
    }
  };

  this.isPhone = (field, value) => {
    const removeCountryCode = value.replace('+1', '');
    const numerical = removeCountryCode.replace(/ /g, '');

    if (numerical.length === 0) {
      errors[field] = `Please enter a ${field}.`;
    }

    if (numerical.length < 10) {
      errors[field] = 'Please enter a ten-digit phone number.';
    }
  };

  // Must be longer than length
  this.isMin = (field, value, length, messageName) => {
    if (value && value.length < length) {
      errors[field] = `Please enter a ${messageName || field} at least ${length} characters long.`;
    }
  };

  // Must be longer than length
  this.isMatch = (field, value, match, messageName, all) => {
    if (value !== all[match]) {
      errors[field] = `The ${messageName || field} must match your ${match}.`;
    }
  };

  // Is exactly a length
  this.isLength = (field, value, length, messageName) => {
    if (value && `${value.length}` !== length) {
      errors[field] = `Please enter a ${messageName || field} that is ${length} characters.`;

      // Special message for zip codes
      if (field === 'zip') {
        errors[field] = `Please enter a ${length}-digit ${field}.`;
      }
    }
  };
}
