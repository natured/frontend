import React from 'react';
import { Icon } from '../../elements';

class ClaimReferralHowItWorks extends React.Component {
  render() {
    return (
      <div className="referral-how-it-works" style={{ padding: '5rem 0' }}>
        <h5><b>Why Natured</b></h5>
        <div className="grid">
          <div>
            <Icon type="outlineCarrot" className="icon" />
              From ethically raised grass fed meats to bread baked
              the morning of your delivery – shop a curated market
              of wildly good groceries.
          </div>
          <div>
            <Icon type="truck" className="icon" />
              Get the best groceries imaginable delivered
              from a growing community of New England’s
              best farmers & artisans.
          </div>
          <div>
            <Icon type="outlineBadge" className="icon" />
              Because it’s about more than just taste. We partner
              with food makers that do right by people, animals,
              & the environment.
          </div>
        </div>
      </div>
    );
  }
}

export default ClaimReferralHowItWorks;
