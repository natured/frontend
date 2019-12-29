import React from 'react';

class ScrollToTop extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.route !== this.props.route) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}


export default ScrollToTop;
