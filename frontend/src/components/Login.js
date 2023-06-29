import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        email,
        password
      };

      await loginUser(credentials);
      
      setMessage('Login successful');

      navigate('/');
    } catch (error) {
      setMessage('Login failed. Please try again.');

    }
  };

  return (
    <div>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;




