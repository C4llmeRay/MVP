import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Products from './components/Products';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar/>
        <Routes>
          <Route key='1' path="/" element={<Home />} />
          <Route key='2' path="/register" element={<Register />} />
          <Route key='3' path="/login" element={<Login />} />
          <Route key='4' path='/profile' element={<Profile/>}/>
          <Route key='5' path="/products" element={<Products/>} />
          <Route key='°' path='**' element={<Navigate />} />

          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

