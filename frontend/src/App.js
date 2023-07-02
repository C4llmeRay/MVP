import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './styles/App.css'

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Category from './components/Category';
import CartContainer from './components/CartContainer';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Checkout from './components/Chekout';


const App = () => {
  return (
    <Router>     
      <div className="page-wrapper">
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/chekout" element={<Checkout />} /> 
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


