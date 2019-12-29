import React, { Component } from 'react';
import { scroller } from 'react-scroll';

class CategoryNavigationDropdown extends Component {
  option = ({ total_products, slug, id, name }) => {
    if (total_products > 0) {
      const selected = this.props.active.includes(id);
      return <option key={slug} value={slug} selected={selected}>{name}</option>;
    }
  }

  options = categories => (
    categories.map((category) => {
      if (category.children.length === 0) { return this.option(category); }
      return (
        <optgroup key={category.slug} label={category.name}>
          {category.children.map(child => (this.option(child)))}
        </optgroup>
      );
    })
  )

  handle = (event) => {
    // Somewhere else, even another file
    scroller.scrollTo(event.target.value, { offset: -170 });
  }

  render() {
    return (
      <div className="category--dropdown">
        <div className="field--small">
          <select defaultValue={null} onChange={this.handle}>
            {this.options(this.props.categories)}
          </select>
        </div>
      </div>
    );
  }
}

export default CategoryNavigationDropdown;
