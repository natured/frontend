import React from 'react';
import { Icon } from '../../elements';

class FAQItem extends React.Component {
  state = { show: false };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const icon = this.state.show ? 'up' : 'down';
    return (
      <div className="faq--item" onClick={this.toggle}>
        <div className="faq--question">
          <span>{this.props.question}</span>
          <span><Icon type={icon} /></span>
        </div>
        {this.state.show && (
          <div className="faq--answer">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default FAQItem;
