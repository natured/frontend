import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const defaultTitle = 'Natured | Local & Organic Grocery Delivery | Boston';
const defaultDescription = 'Eat locally, easily.';
const defaultImage = 'https://natured.s3.amazonaws.com/imgix/static/groceries-overhead.jpg?auto=compress';

export default (ChildComponent, className) => {
  class page extends Component {
    renderTitle = (title, alone) => {
      if (alone) { return title; }
      return `${title ? `${title} - ` : ''}${defaultTitle}`;
    }

    renderRobots = (robots) => {
      if (robots) {
        return <meta name="robots" content={robots} />;
      }
    }

    renderHelmet = ({ title, alone, description, img, robots }) => (
      <Helmet key="helmet">
        <meta charSet="utf-8" />
        <title>{this.renderTitle(title, alone)}</title>
        <meta property="og:title" content={title || defaultTitle} />,
        <meta property="og:description" content={description || defaultDescription} />,
        <meta property="og:image" content={img || defaultImage} />
        {this.renderRobots(robots)}
      </Helmet>
    )

    render() {
      // If a static head method is defined on the child
      if (ChildComponent.head) {
        return [
          this.renderHelmet(ChildComponent.head(this.props)),
          <div key="body" className={`page--market ${className}`}>
            <ChildComponent {...this.props} />
          </div>,
        ];
      }

      // Otherwise, just render the child
      return (
        <div className={`page--market ${className}`}>
          <ChildComponent {...this.props} />
        </div>
      );
    }
  }

  return withRouter(page);
};
