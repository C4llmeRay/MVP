import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, cartItemCount, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
    <Link to="/cart">View Cart ({cartItemCount || 0})</Link>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

