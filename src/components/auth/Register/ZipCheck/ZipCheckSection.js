import React from 'react';
import ZipCheckForm from './ZipCheckForm';
import './zipCheck.scss';

export default ({ updateRegistration }) => (
  <div className="zip-check">
    <h1 className="header--2">New England’s online farmers’ market.</h1>
    <p className="para--16">
      Groceries from New England’s farmers, bakers, & more, delivered to your door.
    </p>
    <ZipCheckForm updateRegistration={updateRegistration} />
  </div>
);
