import "./LoginPage.css";

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (localStorage.getItem('country') === 'PK') {
      window.location.href = '/success';
    } else {
      alert('You are not eligible!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Success = () => {
  return (
    <div>
      <h1>Success</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export { Login, Success };
