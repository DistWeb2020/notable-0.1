import React from 'react'
import {Redirect} from 'react-router-dom';
import {useLogin, useUserContext} from './loginContext';

//A welcome component that determines whether user should be sent to dashboard or login
export default function Welcome() {
  const [permit, setPermit] = useLogin();
  const [user, setUser] = useUserContext();
  setUser(userInfo => ({
    ...userInfo,
    currentDataID: 0
  }))
  return permit===true?(
    <div>
      {/* Send to dashboard */}
      <Redirect to="/dashboard"/>
    </div>
  ):(
    <div>
      {/* Redirect to Login */}
      <Redirect to="/login" />
    </div>
  )
}