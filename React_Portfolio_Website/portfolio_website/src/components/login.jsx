import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {useNavigate} from "react-router-dom"


export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'admin' && password === 'admin') {
      navigate('/admin');
    }else if (email === 'user@user.com' && password === 'user'){
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
