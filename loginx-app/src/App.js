import React, { useState, useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setErrorMessage("");
      setShowForm(false);
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          {errorMessage && <div>{errorMessage}</div>}
          <br />
          <label>Username</label>:
          <input
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label>Password</label>:
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>Welcome, user!</div>
      )}
    </>
  );
};

export default App;
