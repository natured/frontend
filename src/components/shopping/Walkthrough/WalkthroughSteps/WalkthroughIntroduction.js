import React from 'react';
import { Icon } from '../../../elements';

class WalkthroughIntroduction extends React.Component {
  onClick = () => {
    // Analytics.track('CLICKED_CONTINUE_ON_ACCOUNT_MODAL');
    this.props.next();
  }

  render() {
    return (
      <div className="walkthrough">
        <div className="walkthrough-item">
          <div className="number"><div>1</div></div>
          <div className="subdescription">
            Finish adding your account details to continue shopping.
          </div>
        </div>
        <div className="walkthrough-item">
          <div className="number"><div>2</div></div>
          <div className="subdescription">
            Add items to your cart up until the cutoff, midnight before your delivery day.
          </div>
        </div>
        <div className="walkthrough-item">
          <div className="number"><div>3</div></div>
          <div className="subdescription">
            There is no checkout.  If you have items in your cart at the cutoff,
            your order will be processed.
          </div>
        </div>
        <div className="walkthrough-item">
          <div className="number"><div>4</div></div>
          <div className="subdescription">
            We’ll deliver your groceries between 2 and 8 PM on Tuesday.
          </div>
        </div>

        <div className="got-it">
          <button className="button--light-blue next-button" onClick={this.onClick}>
            <span>OK, Continue</span>  <Icon type="longArrowRight" />
          </button>
        </div>
      </div>
    );
  }
}

export default WalkthroughIntroduction;
