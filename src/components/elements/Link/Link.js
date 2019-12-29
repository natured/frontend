import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink, NavLink, withRouter } from 'react-router-dom';
import paths from '../../../pages/paths';
import { authOperations } from '../../../ducks/auth';
// import { toggleDrawer } from '../../../client/actions';

class Link extends Component {
  onClick = async () => {
    // Closes the drawer on any link clicks
    // this.props.toggleDrawer('nav', false);
    // this.props.toggleDrawer('cart', false);

    // Handles specia logout case
    if (this.props.to === 'LOGOUT') {
      await this.props.logout();
      this.props.history.push(paths[this.props.to]);
    }

    if (this.props.onClick) { this.props.onClick(); }
  }

  /**
   * We can pass special parameters like so...
   *   to: 'CATEGORY:produce'
   *   We split params from the category with :
   *   We segment params from each other with ,
   */
  generatePath = (path) => {
    if (!path) { return ''; }
    const [name, wildcards] = path.split(':');
    let to = paths[name];

    if (wildcards) {
      const params = wildcards.split(',');
      params.forEach((param) => {
        const start = to.indexOf(':');
        const slash = to.indexOf('/', start);
        const end = slash < 0 ? to.length : slash;
        to = to.replace(to.substring(start, end), param);
      });
    }

    return to;
  }

  renderSpecial = () => {
    const { className, children, special } = this.props;
    const props = { className, onClick: this.onClick };

    const hrefs = {
      phone: 'tel:+18572207075',
      mail: 'mailto:help@natured.co',
      instagram: 'https://www.instagram.com/naturedco/',
      facebook: 'https://www.facebook.com/naturedco/',
      twitter: 'https://twitter.com/NaturedMarket',
    };

    if (special === 'phone' || special === 'mail') {
      return <a href={hrefs[special]} {...props}>{children}</a>;
    }

    const social = { ...props, target: '_blank', rel: 'noopener noreferrer' };
    return <a href={hrefs[special]} {...social}>{children}</a>;
  }

  render() {
    // Render special links, like the phone # or mailto email
    if (this.props.special) { return this.renderSpecial(this.props.special); }

    const to = this.generatePath(this.props.to);
    const props = { className: this.props.className, onClick: this.onClick };

    if (this.props.nav) {
      return <NavLink to={to} {...props}>{this.props.children}</NavLink>;
    }

    return <RouterLink to={to} {...props}>{this.props.children}</RouterLink>;
  }
}

const mapDispatch = {
  logout: authOperations.logout,
};

export default connect(null, mapDispatch)(withRouter(Link));
