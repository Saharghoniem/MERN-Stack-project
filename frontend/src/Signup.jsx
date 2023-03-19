

import React, { useState } from 'react';

import "./Signin.css";

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button className='but' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
