import React, { Component } from 'react';
import Drawer from './Drawer';
import { Icon, Link } from '../../../elements';
import ParentCategories from '../../../categories/ParentCategories/ParentCategories';
import CheckAuth from '../../../auth/AuthHelpers/CheckAuth';
import WhenAuth from '../../../auth/AuthHelpers/WhenAuth';

const DrawerLink = ({ to, children, arrow, phone, mail, special }) => (
  <Link to={to} className="nav--drawer-link" special={special}>
    <span>{children}</span>
    {arrow ? <Icon type="right" className="icon--arrow" /> : null }
    {phone ? <Icon type="phone" /> : null }
    {mail ? <Icon type="mail" /> : null }
  </Link>
);

const Button = ({ to, children, color }) => (
  <Link to={to} className={`button--${color}--full`}>{children}</Link>
);

class NavDrawer extends Component {
  renderTopButton = () => (
    <CheckAuth>
      <Button to="ACCOUNT" color="light-blue">My Account</Button>
      <div className="nav--drawer--buttons">
        <Button to="LOGIN" color="light-blue">Login</Button>
        <Button to="REGISTER" color="slate-gray">Create Account</Button>
      </div>
    </CheckAuth>
  )

  renderReferralButton = () => (
    <WhenAuth>
      <Button to="INVITE" color="slate-gray">
        <Icon type="gift" /> &nbsp; Share Local Food, Get $5
      </Button>
    </WhenAuth>
  )

  renderCategory = ({ slug, name }) => (
    <DrawerLink key={slug} to={`CATEGORY:${slug}`} arrow>{name}</DrawerLink>
  )

  render() {
    return (
      <Drawer name="nav">
        <div className="nav--drawer-content">
          {this.renderReferralButton()}
          {this.renderTopButton()}

          <p className="nav--drawer-header">Shop by category</p>
          <div>
            <ParentCategories renderCategory={this.renderCategory} />
          </div>

          <p className="nav--drawer-header">More</p>
          <div>
            <DrawerLink to="ABOUT_US">About Us</DrawerLink>
            <DrawerLink to="FAQ">FAQs</DrawerLink>
            <DrawerLink special="phone" phone>+1 (857) 220 7075</DrawerLink>
            <DrawerLink special="mail" mail>help@natured.co</DrawerLink>
            <CheckAuth>
              <Link to="LOGOUT" className="nav--drawer-link">Logout</Link>
              <span />
            </CheckAuth>
          </div>
        </div>
      </Drawer>
    );
  }
}

export default NavDrawer;
