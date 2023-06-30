import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { getCart } from '../api';

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Retrieve cart items and count from API
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const items = await getCart();
      setCartItems(items);
      calculateCartItemCount(items);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateCartItemCount = (items) => {
    const count = items.length;
    setCartItemCount(count);
  };

  const removeFromCart = (itemId) => {
    // Remove item from cart and update state
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    calculateCartItemCount(updatedCartItems);
  };

  return (
    <Cart cartItems={cartItems} cartItemCount={cartItemCount} removeFromCart={removeFromCart} />
  );
};

export default CartContainer;


