import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';




const Cart = ({ cartItems }) => {
  const cartItemCount = cartItems ? cartItems.length : 0;

  return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
      <Container>
        <nav className='me-auto'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <div className="nav-right">
            {/* Other navbar items */}
          </div>
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
          </Link>
        </nav>
      </Container>
    </NavbarBs>
  );
};

export default Cart;

