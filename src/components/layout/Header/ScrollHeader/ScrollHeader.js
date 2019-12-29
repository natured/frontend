import React from 'react';
import { connect } from 'react-redux';

class ScrollHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { previous: null, show: true, priorStatus: true };
  }

  componentDidMount() {
    // Sets the starting scroll position
    this.setState({ previous: window.scrollY });
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  /**
   * When the nav drawer is toggled, adjust the skinny
   *   - Hide when open, show prior status when closed
   */
  componentDidUpdate({ open }) {
    if (open !== this.props.open) {
      if (this.props.open) {
        // Stores the setting of the skinny before updating
        // Hides the skinny when the nav drawer is open
        this.setState({ priorStatus: this.state.show });
        this.update(false);
      } else {
        // When closing the nav drawer, check what the skinny was before open
        this.update(this.state.priorStatus);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  update = (show) => {
    this.setState({ show });
    this.props.update({ show });
  }

  // TODO: add scroll tolerance
  handleScroll = () => {
    // Only hand scroll if nav is closed
    if (!this.props.open) {
      const position = window.scrollY;

      if (Math.abs(position - this.state.previous) > this.props.tolerance) {
        if (position > this.state.previous) {
          this.update(false);
        } else {
          this.update(true);
        }
      }

      if (position <= 10) {
        this.update(true);
      }

      this.setState({ previous: position });
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = ({ ui }) => ({
  open: ui.drawers.nav || false,
});

export default connect(mapStateToProps)(ScrollHeader);
