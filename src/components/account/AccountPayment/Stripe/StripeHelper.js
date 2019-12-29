import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Elements, StripeProvider } from 'react-stripe-elements';

class StripeHelper extends Component {
  constructor(props) {
    super(props);
    this.state = { stripe: null };
  }

  // loads stripe
  componentDidMount() {
    const stripe = document.createElement('script');
    stripe.src = 'https://js.stripe.com/v3/';
    stripe.async = true;
    stripe.onload = () => {
      this.setState({ stripe: window.Stripe(this.props.STRIPE_KEY) });
    };
    if (document.body) { document.body.appendChild(stripe); }
  }

  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          {this.props.children}
        </Elements>
      </StripeProvider>
    );
  }
}

const mapState = ({ app }) => ({ STRIPE_KEY: app.keys.STRIPE_KEY });
export default connect(mapState)(StripeHelper);
