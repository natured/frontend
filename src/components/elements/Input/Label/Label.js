import React from 'react';
import './label.scss';

/**
 * Renders a label for a form field
 *   To use, pass the field name as a prop and the text as children
 *   For example:
 *
 *     <Label field="email">Email Address</Label>
 *
 */
export default function Label({ field, children }) {
  return <label htmlFor={field}>{children}</label>;
}
