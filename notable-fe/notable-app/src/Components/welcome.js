import React from 'react'
import {Redirect, useHistory} from 'react-router-dom';
import {useLogin, useUpdateLogin, useUserInfo, useUpdateUserInfo} from './loginContext';

import NavNLI from './nav-notLoggedIn';
import Login from './login';


export default function Welcome() {
  const permit = useLogin();
  const userInfo = useUserInfo();
  // const togglePermit = useUpdateLogin();
  
  const history = useHistory(); //Could this be made in ThemeContext?
  
  //Actually probably don't need this
  // const sendToLogin = () => {
  //   if(!permit){
  //     let path= '/login';
  //     history.push(path);
  //   }
  // }


  return permit?(
    <div>
      {/* Send to dashboard */}
      {/* <Redirect to='/dashboard' /> */}
      {/* May not need to push a state since there is the global userInfo, but not sure yet */}
      {() => {let path='/dashboard'; history.push({pathname:path, state:{user:userInfo}}); }}
    </div>
  ):(
    <div>
      {/* Show Welcome stuff and render the Login button */}
      <NavNLI />
      <h1>Notable</h1>
      <h3>
      Make your notes more notable!
      <br/><br/>Login below!<br/><br/>
      </h3>
      {/* <Redirect to="/login" /> */}
      <Login />
    </div>
  )
}
