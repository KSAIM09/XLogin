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

    if(username === 'user' && password === 'password') {
      setMessage(`Welcome, user!`);
      // setShowForm(false);
    }
    else{
      setMessage(`Invalid username or password`);
    }
  };


  return (
    <div className='App'>
      <h1>Login Page</h1>
      {message && <p>{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="username">Username:</lable>
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
        </div>
        <div>
          <label htmlFor="password">Password:</label>
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
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        
      </form>
    </div>
  );

};

export default App;
