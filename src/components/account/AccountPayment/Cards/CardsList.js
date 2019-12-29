import React from 'react';
import Card from './Card';
import './cards.scss';

class CardsList extends React.Component {
  cards = () => {
    if (this.props.cards.length === 0) {
      return <div className="no-cards">You currently have no payment methods.</div>;
    }

    if (this.props.cards.length === 1) {
      return <Card key={this.props.cards[0].id} card={this.props.cards[0]} alone />;
    }

    return [
      <div key="header" className="card-header"><span>Default</span></div>,
      this.props.cards.map(card => (<Card key={card.id} card={card} />)),
    ];
  }

  render() {
    return (
      <div className="cards-list">{this.cards()}</div>
    );
  }
}

export default CardsList;
