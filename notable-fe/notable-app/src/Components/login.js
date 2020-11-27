import React from 'react';
import './Styles/login.css';

function Login() {
  return (
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

export default Login;