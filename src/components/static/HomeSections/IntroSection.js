import React from 'react';
import { Image } from '../../elements';
import IntroRegisterContainer from '../../auth/Register/IntroRegisterContainer';
// import DeliveryCheck from '../../../client/components/delivery/DeliveryCheck/DeliveryCheck';
import './sections.scss';
import './introSection.scss';

export default () => (
  <div className="intro-section container--fill-screen">
    <Image background className="groceries-bg" img="static/groceries-overhead">
      <div className="container--outer">
        <div className="intro-section-content">
          <div className="white-tile">
            <IntroRegisterContainer />
          </div>
        </div>
      </div>
    </Image>
  </div>
);
