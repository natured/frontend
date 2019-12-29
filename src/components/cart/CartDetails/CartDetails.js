import React from 'react';
// import { Sticky } from 'react-sticky';
import CartPricing from '../CartPricing/CartPricing';
import ProgressStatus from '../CartPricing/Delivery/ProgressStatus';
import ProgressBar from '../CartPricing/Delivery/ProgressBar';
import './cartDetails.scss';

export default () => (
  <div className="cart--details">
    <ProgressStatus />
    <ProgressBar />
    <CartPricing />
  </div>
);
