import React, { useState } from 'react';

import './App.css';

const App = ()=>{
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  // const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) =>{
    if(e.target.name === 'username'){
      setUserName(e.target.value);
    }else if (e.target.name === 'password'){
      setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setMessage('Please fill out both username and password fields.');
    } else {
      if (username === 'user' && password === 'password') {
        setMessage(`Welcome, ${username}!`);
      } else {
        setMessage('Invalid username or password');
      }
    }
  };


  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        {message && <p>{message}</p>}
        <lable htmlFor="Username">Username</lable>:
        <input
          placeholder='username'
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={handleInputChange}
            // onChange={(e)=> setUserName(e.target.value)} 
          required
        />
        <br />
        <label htmlFor="Password">Password</label>:
        <input
          placeholder='password'
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={handleInputChange}
            // onChange={(e)=> setPassword(e.target.value)}
          required
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );

};

export default App;
