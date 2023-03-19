 
import React, { useState } from 'react';
import "./Signin.css"
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setSuccess('You have successfully logged in!');
      setError('');
    } else {
      setError('Invalid username or password!');
      setSuccess('');
    }
  };

  return (
    <div className="login" >
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default Login;





