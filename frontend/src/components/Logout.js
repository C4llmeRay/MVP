import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../authService';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;