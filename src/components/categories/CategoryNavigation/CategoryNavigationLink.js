import React, { Component } from 'react';
import { Link, scrollSpy } from 'react-scroll';

class CategoryNavigationLink extends Component {

  componentDidMount() {
    scrollSpy.update();
  }

  getActiveClass = () => {
    const { active, category } = this.props;
    return active.includes(category.id) ? ' active' : '';
  }

  getClass = () => (`side--link--${this.props.parent ? 'parent' : 'child'}`);

  handleScroll = () => {
    const { id, parent } = this.props.category;
    this.props.handle({ categoryId: id, parentId: parent });
  }

  render() {
    return (
      <Link
        spy
        hashSpy
        activeClass="active"
        to={this.props.category.slug}
        offset={-132}
        className={`${this.getClass()}${this.getActiveClass()}`}
        onSetActive={this.handleScroll}
      >
        <span>{this.props.category.name}</span>
      </Link>
    );
  }
}


export default CategoryNavigationLink;
