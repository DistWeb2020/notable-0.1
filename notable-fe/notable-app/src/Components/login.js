import React from 'react';
import Dashboard from './dashboard';
import Popup from 'reactjs-popup';
import './Styles/App.css';
import {Redirect, useHistory} from 'react-router-dom';
import {useLogin, useUpdateLogin, useUpdateUserInfo, useUserInfo} from './loginContext';
const axios = require('axios');



export default function Login() {
  //Permit and togglePermit are used for access control
  var permit = useLogin();
  var togglePermit = useUpdateLogin();
  //Used to store the userInfo in a state. May do this differently though.
  var userInfo = useUserInfo();
  // const setUserInfo = useUpdateUserInfo();
  
  const history = useHistory(); //Could this be made in ThemeContext?
  
  const login = () => {
    console.log("I'm in login!");
    // obtain users username and password
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //TODO: Check the data for SQL injection before performing query. Give error message if user and password are bad.


    // Check if user is in db
    // Make sure user and password or not empty or something else weird
    // Use the message.js once that has been made and tested.
    if(user.length!==0) {
      if(password.length!==0){
        axios.get('http://localhost:8000/login', {params : {
          username: user,
          password: password
        }})
        .then((response) => {
          //Put response.data in the userInfo state since the user is in the db
          // setUserInfo(response.data);
          userInfo = response.data;
          console.log(response.data);
          console.log(userInfo);
          //Use togglePermit to change it to true 
          permit = togglePermit;
          //and send them to the Dashboard.
          if(permit){
            let path= '/dashboard';
            history.push({pathname:path, state:{user:userInfo}});
          }
        }, (error) => {
          // Use message.js to display some error message to the user telling them to try again or signup
          console.log(error);
        });
      } else {
        alert("Please enter a password.");
      }
    } else if(password.length!==0) {
      alert("Pleae enter a username.");
    } else {
      alert("Please enter a username and password.");
    }
  }


  let close = () => {
    document.getElementById('login').blur();
    document.getElementById('login').style.display ='none';
  }

  return permit ?(
    <div>
      {/* Send them to dashboard */}
      {/* <Dashboard user={userInfo} /> */}
      {/* May not need to push a state since there is the global userInfo, but not sure yet */}
      {/* <Redirect to={{
        pathname='/dashboard',
        state={user:userInfo}
        }} /> */}
        {/* May not need to push a state since there is the global userInfo, but not sure yet */}
      {() => {let path = '/dashboard'; history.push({pathname:path, state:{user:userInfo}})}}
    </div>
  ):(
    // Show login button
    <Popup
        trigger={<button id="login-button" className="home-button"> Login </button>}
        modal
        nested
      >
        <div id="login" className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">Notable</div>
            <div className="login content">
              Username  :
              <input className="username" id="username"/>
              <br /><br />
                Password  :
              <input className="password" id="password" type="password" />
              <br /><br />
              {/* You need to make this button send you to the dashboard when verifyLogin is succesful */}
              {/* <button onClick={ this.verifyLogin }>Login</button> */}
              <button onClick={ login }>Login</button>
            </div>
            <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                close modal
              </button>
          </div>
      </Popup>
  );
}
