import React, {useEffect} from 'react';
import Dashboard from './dashboard';
import Popup from 'reactjs-popup';
import './Styles/App.css';
import {useHistory} from 'react-router-dom';
import {useLogin, useUpdateLogin, useUserContext} from './loginContext';
const axios = require('axios');



export default function Login(props) {
  //Permit and togglePermit are used for access control
  // var permit = useLogin();
  const [permit, setPermit] = useLogin();
  // const togglePermit = useUpdateLogin();
  //Used to store the userInfo in a state. May do this differently though.
  // var userInfo = useUserInfo();
  //Get the global state from loginContext
  const [userInfo, setUserInfo] = useUserContext();
  const history = useHistory(); //Could this be made in ThemeContext?

  //Keeps the user logged out if they came back from a different page
  // useEffect(() => {
  //     togglePermit()
  // }, [userInfo])
  window.onpageshow = function(evt) { if (evt.persisted){ window.history.back(); setPermit(false) }}

  const login = () => {
    
    // obtain users username and password
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //TODO: Check the data for SQL injection before performing query. Give error message if user and password are bad.
    //The above TODO is handled on backend, but there is no fix for user to handle bad userName or Password because the backend crashes.


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
          setUserInfo(userInfo => ({
            ...userInfo,
            // Notes is actually whatever is contained in the response. That response has more than just notes
            userInfo: response.data
          }))
          setPermit(true);
          // togglePermit();
          // console.log(response.data);
          //Use togglePermit to change it to true
          // if(permit===false)
          // togglePermit();
          //and send them to the Dashboard.
          let path= '/dashboard';
          history.push({pathname:path, state:{user:userInfo}});      
          }, (error) => {
          // Use message.js to display some error message to the user telling them to try again or signup
          alert("Your password or username was incorrect.\nPlease try again")
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

  return (
    // Show login button
    <>

    <h1>Notable</h1>
      <h3>
      Make your notes more notable!
      <br/><br/>Login below!<br/><br/>
      </h3>
      
    <Popup
        trigger={<button id="login-button" className="home-button" > Login </button>}
        modal
        nested
      >
        <div id="login" className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">Notable</div>
            <div className="login content">
              Username &nbsp;
              <input className="username" id="username"/>
              <br /><br />
                Password &nbsp;
              <input className="password" id="password" type="password" />
              <br /><br />
              {/* You need to make this button send you to the dashboard when verifyLogin is succesful */}
              {/* <button onClick={ this.verifyLogin }>Login</button> */}
              <button className="popLog" onClick={ login }>Login</button>
            </div>
            <button
                className="popClose"
                onClick={() => {
                  close();
                }}
              >
                Close
              </button>
          </div>
      </Popup>
      </>
  );
}