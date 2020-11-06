import React from 'react';
import './Styles/App.css';

class Login extends React.Component {
  // verifies users login information
  verifyLogin() {
    // obtain users username and password
    var user = document.getElementById("username");
    var password = document.getElementById("password");
    var request = '{"username": '+ user + ',"password":' + password + '}';
    var response = {};
    // check it against usernames and passwords available in password
    // use the route from routes.js

    // if pass, send to main notes preview page

    // else, tell user the login does not exist and they should try again or signup!

    alert( "I'm logged in! \r\n(Not really though)" );
  }

// renders the login page
  render() {
    return (
      <div>
        <h1>Notable</h1>
        <div className="login">
          Username:
          <input className="username" id="username"/>
          <br /><br />
            Password:
          <input className="password" id="password" />
          <br /><br />
          <button onClickCapture={ this.verifyLogin }>Login</button>
        </div>
      </div>
    );
  }
}

// sets default export to Login
export default Login;