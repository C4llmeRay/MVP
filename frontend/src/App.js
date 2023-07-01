import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Category from './components/Category';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route key='1' path="/" element={<Home />} />
            <Route key='2' path="/register" element={<Register />} />
            <Route key='3' path="/login" element={<Login />} />
            <Route key='4' path='/profile' element={<Profile />} />
            <Route key='5' path="/products" element={<Products />} />
            <Route key='6' path='/*' element={<Navigate to="/" />} />
            <Route key='7' path="/cart" element={<Cart />} />
            <Route key='8' path="/category/:category" element={<Category />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;


