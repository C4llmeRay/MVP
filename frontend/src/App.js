import React  from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'; // Add this line


import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Container className="mb-4">

        <Routes>
          <Route key='1' path="/" element={<Home />} />
          <Route key='2' path="/register" element={<Register />} />
          <Route key='3' path="/login" element={<Login />} />
          <Route key='4' path='/profile' element={<Profile/>}/>
          <Route key='5' path="/products" element={<Products/>} />
          <Route key='6' path='**' element={<Navigate />} />
          <Route key='7' path="/cart" element={<Cart />} />

          

        </Routes>
        </Container>

          

      </div>
    </Router>
  );
};

export default App;

