import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as NavbarBs, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ cartItems }) => {
  const cartItemCount = cartItems ? cartItems.length : 0;

  return (
    <NavbarBs className="navbar fixed-top" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">Logo</Link>
        <NavbarBs.Toggle aria-controls="navbarNavDropdown" />
        <NavbarBs.Collapse id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <NavDropdown title="Categories" id="navbarDropdownMenuLink">
              <NavDropdown.Item as={Link} to="/category/clothes">Clothes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/furniture">Furniture</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/electronics">Electronics</NavDropdown.Item>
            </NavDropdown>
          </ul>
          <div className="navbar-icons">
            <Link to="/cart" className="nav-link cart-icon">
              <FaShoppingCart />
              {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
            </Link>
            <Link to="/profile" className="nav-link">
              <FaUser />
            </Link>
          </div>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;






