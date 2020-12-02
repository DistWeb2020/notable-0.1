import React, {useEffect} from 'react'
import {Redirect, useHistory} from 'react-router-dom';
import {useLogin, useUpdateLogin, useUpdateUserInfo} from './loginContext';

import NavNLI from './nav-notLoggedIn';
import Login from './login';


export default function Welcome(props) {
  const [permit, setPermit] = useLogin();
  // const userInfo = useUserInfo();
  // const togglePermit = useUpdateLogin();
  
  const history = useHistory();

  return permit===true?(
    <div>
      {/* Send to dashboard */}
      {/* <Redirect to='/dashboard' /> */}
      {/* May not need to push a state since there is the global userInfo, but not sure yet */}
      <Redirect to="/dashboard"/>
    </div>
  ):(
    <div>
      {/* Show Welcome stuff and render the Login button */}
      {/* <NavNLI />
      <h1>Notable</h1>
      <h3>
      Make your notes more notable!
      {/* <br/><br/>Login below!<br/><br/>
      </h3> */}
      <Redirect to="/login" />
      {/* <Login /> */}
    </div>
  )
}