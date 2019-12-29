import React from 'react';
import CartItem from './CartItem';

// in charge of groupign by top level category
export default ({ categories }) => (
  <div className="cart--items--list">
    {categories.map(({ category, items }) => (
      <div key={category.name}>
        <h1 className="header--6--ish category--header">{category.name}</h1>
        <div className="cart--items">
          {items.map(item => <CartItem key={item.id} item={item} />)}
        </div>
      </div>
    ))}
  </div>
);
