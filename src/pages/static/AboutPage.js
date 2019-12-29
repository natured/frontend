import React, { Component } from 'react';
// import { PageView } from '../../../services/Analytics';
import page from '../page';
import { Icon, Link } from '../../components/elements';
import ImageWithContent from '../../components/static/HomeSections/ImageWithContent';

class AboutPage extends Component {
  static head = () => ({ title: 'About Us' });



  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-content">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '16px', color: '#787878', textTransform: 'uppercase' }}>
                Our Mission
              </p>
              <h1 className="header--1--ish">
                Growing local communities <br />
                with <span className="tag--like"> great food </span>
              </h1>

              <p className="p" style={{ fontSize: '24px', paddingTop: '2rem', color: '#777', maxWidth: '700px', margin: 'auto' }}>
                We’re on a mission to make your food system more local, to
                endlessly support local food makers, and to bring you the best
                food imaginable.
              </p>
            </div>
          </div>
        </section>
        <ImageWithContent side="left" src="static_toast.jpg">
          <h1 className="header--4--ish">Locally sourced & wildly fresh food</h1>
          <p>
            Shop from a full range of seasonal produce, freshly baked bread,
            sustainably raised meat, pantry staples, & more.
          </p>
          <Link to="MARKET" className="button--midnight">
            <span>Discover the Natured Market</span> &nbsp; &nbsp;
            <Icon type="longArrowRight" />
          </Link>
        </ImageWithContent>

        <ImageWithContent side="right" src="static_goodnow-farms.jpg">
          <h1 className="header--4--ish">Support your food makers</h1>
          <p>
            When you shop with us, you’re supporting New England’ss food makers
            and endorsing sustainable food practices. We care about creating a
            thriving local food system, so you can feel good about more than
            just the taste.
          </p>
          <Link className="link underlined primary" to="FOODMAKER:goodnow-farms-chocolate">
            Meet Monica & Tom from Goodnow Farms &nbsp; <Icon type="longArrowRight" />
          </Link>
        </ImageWithContent>

        <ImageWithContent side="left" src="static_delivery.jpg">
          <h1 className="header--4--ish">Delivered to your doorstep</h1>
          <p>
            We pack your groceries with care and deliver to homes across the
            Greater Boston area.
          </p>
          <div>
            <p>
              We make deliveries on the following days (with more coming soon!)
            </p>
            <div style={{ display: 'flex' }}>
              <div style={{ textAlign: 'center', paddingRight: '15px' }}>
                <Icon type="circle" className="barely-there" />
                <div style={{ fontSize: '12px', paddingTop: '5px' }}>Sun</div>
              </div>

              <div style={{ textAlign: 'center', paddingRight: '15px' }}>
                <Icon type="circle" className="barely-there" />
                <div style={{ fontSize: '12px', paddingTop: '5px' }}>Mon</div>
              </div>

              <div style={{ textAlign: 'center', paddingRight: '15px' }}>
                <Icon type="circle" className="highlight" />
                <div style={{ fontSize: '12px', paddingTop: '5px' }}>Tue</div>
              </div>

              <div style={{ textAlign: 'center', paddingRight: '15px' }}>
                <Icon type="circle" className="barely-there" />
                <div style={{ fontSize: '12px', paddingTop: '5px' }}>Wed</div>
              </div>

              <div style={{ textAlign: 'center', paddingRight: '15px' }}>
                <Icon type="circle" className="barely-there" />
                <div style={{ fontSize: '12px', paddingTop: '5px' }}>Thu</div>
              </div>

              <div style={{ textAlign: 'center', paddingRight: '15px' }}>
                <Icon type="circle" className="barely-there" />
                <div style={{ fontSize: '12px', paddingTop: '5px' }}>Fri</div>
              </div>

              <div style={{ textAlign: 'center', paddingRight: '15px' }}>
                <Icon type="circle" className="barely-there" />
                <div style={{ fontSize: '12px', paddingTop: '5px' }}>Sat</div>
              </div>
            </div>
          </div>
        </ImageWithContent>
      </div>
    );
  }
}

export default { component: page(AboutPage) };
