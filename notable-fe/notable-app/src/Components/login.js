import React from 'react';
import {useHistory} from 'react-router-dom';
import {useLogin, useUpdateLogin} from './loginContext';

export default function Login() {
  const permit = useLogin();
  const togglePermit = useUpdateLogin();
  
  const history = useHistory(); //Could this be made in ThemeContext?
  
  const login = () => {
    // Check if user is in db
    //If they are use togglePermit to change it to true 
    //and send them to the Dashboard.
    if(permit){
      let path= '/dashboard';
      history.push(path);
    }
  }


  return permit ?(
    <div>
      {/* Send them to dashboard */}
    </div>
  ):(
    <div>
      {/* Show login button */}
    </div>
  );
}
