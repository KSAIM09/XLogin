import React, { useState } from 'react';
import './App.css';

const App = ()=>{
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  // const [showForm, setShowForm] = useState(true);



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
    <div>
      <h1>Login Page</h1>
      {message && <p>{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="username">Username:</lable>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e)=> setUserName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
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
