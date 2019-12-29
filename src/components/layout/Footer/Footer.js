import React from 'react';
import BrandLink from '../Brand/BrandLink';
import BrandSocial from '../Brand/BrandSocial';
import { Icon, Link } from '../../elements';
import ParentCategories from '../../categories/ParentCategories/ParentCategories';
import './footer.scss';

const categoryLink = ({ slug, name }) => (
  <Link to={`CATEGORY:${slug}`} key={slug}>{name}</Link>
);

const HelpLinks = () => (
  <div className="footer--help--vertical">
    <Link special="phone" phone className="footer--help">
      <Icon type="solidPhone" className="icon--left" />
      <span>+1 (857) 220 7075</span>
    </Link>
    <Link special="mail" mail className="footer--help">
      <Icon type="solidMail" className="icon--left" />
      <span>help@natured.co</span>
    </Link>
  </div>
);

const Brand = () => (
  <div className="footer--brand--vertical">
    <BrandLink className="footer--logo" fill="white" />
    <span className="footer--emph">Need help?</span>
    <HelpLinks />
    <BrandSocial className="footer--social" iconClassName="icon--circle" />
  </div>
);

const Section = ({ title, children }) => (
  <div className="footer--section--vertical">
    <div className="footer--header">{title}</div>
    {children}
  </div>
);

const Sections = () => (
  <div className="footer--sections--horizontal">
    <Section title="Marketplace">
      <ParentCategories renderCategory={categoryLink} />
    </Section>
    <Section title="More">
      <Link to="ABOUT_US">About Us</Link>
      <Link to="FAQ">FAQ</Link>
    </Section>
  </div>
);

const Copy = () => (
  <span>&copy; {(new Date()).getFullYear()} Natured, Inc.</span>
);

const Legal = () => (
  <div className="footer--legal">
    <div className="container--outer">
      <div><Copy /></div>
      <div className="footer--legal--links">
        <Link to="TERMS">Terms</Link>
        <Link to="PRIVACY">Privacy</Link>
      </div>
    </div>
  </div>
);

export default () => (
  <div className="footer--">
    <div className="footer--main">
      <div className="container--outer">
        <Brand />
        <Sections />
      </div>
    </div>
    <Legal />
  </div>
);
