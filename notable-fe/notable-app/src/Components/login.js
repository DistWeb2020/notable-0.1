import React from 'react';
import './Styles/App.css';
// import { appendScript, removeScript } from './Scripts/runScripts'

class Login extends React.Component {
  // componentDidMount() {
  //   appendScript( "/Scripts/checkLogin.js" );
  // }

  // componentWillUnmount() {
  //   removeScript( "/Scripts/checkLogin.js" )
  // }

  verifyLogin() {
    alert( "I'm logged in! \r\n(Not really though)" );
  }


  render() {
    return (
      <div>
        <h1>Notable</h1>
        <div className="login">
          Username:
          <input className="username" />
          <br /><br />
            Password:
          <input className="password" />
          <br /><br />
          <button onClickCapture={ this.verifyLogin }>Login</button>
        </div>
      </div>
    );
  }
}

// function Login() {
//   return (
//     <div>
//       <ScriptTag isHydrating={true} type="text/javascript" src="some_script.js"/>
//       <h1>Notable</h1>
//       <div class="login">
//           Username:
//         <input class="username" />
//           <br /><br />
//           Password:
//         <input class="password" />
//           <br /><br />
//           <button>Login</button>
//       </div>
//     </div>
//   );
// }

export default Login;