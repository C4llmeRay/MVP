import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import '../styles/Navbar.css';


const Navbar = ({ cartItems }) => {
  const cartItemCount = cartItems ? cartItems.length : 0;

  return (
    <NavbarBs className="navbar" expand="lg">
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
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="#" className="dropdown-item">Action</Link>
                <Link to="#" className="dropdown-item">Another action</Link>
                <Link to="#" className="dropdown-item">Something else here</Link>
              </div>
            </li>
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





