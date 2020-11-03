import React from 'react';
import './Styles/login.css';

function Login() {
  return (
    <div>
      <h1>Notable</h1>
      <div class="login">
          Username:
        <input class="username" />
          <br /><br />
          Password:
        <input class="password" />
          <br /><br />
          <button>Login</button>
      </div>
    </div>
  );
}

export default Login;