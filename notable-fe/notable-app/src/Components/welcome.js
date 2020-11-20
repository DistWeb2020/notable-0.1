import React from 'react'
import {useHistory} from 'react-router-dom';
import {useLogin, useUpdateLogin} from './loginContext';

export default function Welcome() {
  const permit = useLogin();
  // const togglePermit = useUpdateLogin();
  
  const history = useHistory(); //Could this be made in ThemeContext?
  
  const sendToLogin = () => {
    if(!permit){
      let path= '/login';
      history.push(path);
    }
  }


  return permit?(
    <div>
      {/* Send to dashboard */}
    </div>
  ):(
    <div>
      {/* Show Welcome stuff and render the Login button */}
    </div>
  )
}
