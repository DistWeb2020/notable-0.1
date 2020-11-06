import React from 'react';
import './Styles/App.css';

// const xhttp = new XMLHttpRequest();
// var response = {};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={response:""};
  }
  callRoutes() {
    // obtain users username and password
    var user = document.getElementById("username").innerHTML;
    var password = document.getElementById("password").innerHTML;
    var request = '{"username": '+ user + ',"password":' + password + '}';
    // set up url to be sent for GET request
    var url = "http://localhost:8000/routes?" + request;
    fetch(url)
    //need to find way to check for status first for conditional handling
      .then(res => res.json()) // get the json from the response
      .then(res => this.setState({response: res})); // set up the state of the "response" prop to be whatever came from the res
  }
  
  
  // verifies users login information
  verifyLogin() {
    // obtain users username and password
    
    // check it against usernames and passwords available in password
    // use the callRoutes function to get response
    

    //Don't think I actually need this???
    // xhttp.onreadystatechange = function() {
    //   // if pass, send to main notes preview page
    //   if(this.readyState == 4 && this.status ==200){
    //     response = JSON.parse(this.responseText);

        
    //   }
    //   // else, tell user the login does not exist and they should try again or signup!
    //   else if(this.status==400){
    //     var message = JSON.parse(this.response);
    //     alert(message);
    //   }
    // };
    // xhttp.open("GET", "/../../notable-be/src/server.js");
    // xhttp.send();

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
          <button onClick={ this.verifyLogin }>Login</button>
        </div>
      </div>
    );
  }
}

// sets default export to Login
export default Login;