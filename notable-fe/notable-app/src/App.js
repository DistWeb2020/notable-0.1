import React, {useContext, createContext, useState} from 'react';
import {Redirect, Link, Switch, Route, useHistory, useLocation, BrowserRouter as Router} from 'react-router-dom';
import './Components/Styles/App.css';
import Dashboard from './Components/dashboard';
import NewNote from './Components/newNote';
import NavNLI from './Components/nav-notLoggedIn';
import Popup from 'reactjs-popup';
import Message from './Components/message';
import { Component } from 'react';

const axios = require('axios');

// Make it all functional again and break it down to be simpler





//Figure out how to make sure this updates when routed to Dashboard
//Turn it into a state somehow and pass it back to Welcome after Login has
let userInfo = "";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permit: false,
      // So useHistory to get the props from 
      // history: useHistory()
    }
  }

  componentDidUpdate() {
    this.state.permit = true;
  }

  render(){
    // This is the authentication to check if the user is in the db of users
  // const fakeAuth = {
  //   isAuthenticated: false,
  //   signin(cb) {
  //     // So here you would say "if user is in db, set fake.auth.isAuthenticated to true;else do nothing(redirect?give user message)"
  //     fakeAuth.isAuthenticated = true;
  //     setTimeout(cb, 100); // fake async
  //   },
  //   signout(cb) {
  //     // Log the user out
  //     fakeAuth.isAuthenticated = false;
  //     setTimeout(cb, 100);
  //   }
  // };
  
  /** For more details on
   * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
   * refer to: https://usehooks.com/useAuth/
   */
  // const authContext = createContext();
  
  // function ProvideAuth({ children }) {
  //   const auth = useProvideAuth();
  //   return (
  //     <authContext.Provider value={auth}>
  //       {children}
  //     </authContext.Provider>
  //   );
  // }
  
  // function useAuth() {
  //   return useContext(authContext);
  // }
  
  // function useProvideAuth() {
  //   // setUser and user are now useSate functions that take a parameter that is the state of the user
  //   // what about a password? or do you check for the user and do all the setUser and user afterward
  //   const [user, setUser] = useState(null);
  
  //   const signin = (user,cb) => {
  //     return fakeAuth.signin(() => {
  //       setUser(user);
  //       console.log(user);
  //       cb();
  //     });
  //   };
  
  //   const signout = cb => {
  //     return fakeAuth.signout(() => {
  //       setUser(null);
  //       cb();
  //     });
  //   };
  
  //   return {
  //     user,
  //     signin,
  //     signout
  //   };
  // }

  // const authStuff = {
  //   fakeAuth: fakeAuth,
  //   authContext: authContext,
  //   ProvideAuth: ProvideAuth,
  //   useAuth: useAuth,
  //   useProvideAuth: useProvideAuth
  // }

  const location = {
    state: "/"
  }
    return (
      <div className="App">
        {/* <ProvideAuth> */}
        {/* Display a different Nav here and for when user is logged in */}
          <Router>
            <div>
              <AuthButton state={this.state} />
              <Switch>
                <Route path="/login">
                  <LoginPage state={this.state} />
                </Route>
                <PrivateRoute path="/dashboard" state={this.state}>
                  {/* The Dashboard component is passed a prompt that is assigned in the LoginPage function */}
                  {/* <Dashboard user={(userInfo===""?{"firstname": "me", "lastname":"not me","notes": [{"name": "fake1"}, {"name": "fake2"}] }:userInfo)}/> */}
                  {/* <Dashboard user={userInfo}/> */}
                  {/* <Dashboard /> */}
                </PrivateRoute>
                <Route path="/newNote">
                  <NewNote />
                </Route>
              </Switch>
            </div>
          </Router>
        {/* </ProvideAuth> */}
      </div>
    );
  }
  // renders the login page
  
  }
  
  
  
  
  class AuthButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        permit: false
      }
    }

    componentDidMount() {
      this.state.permit = this.props.permit;
    }

      render() {
      // let history = this.props.useHistory();
      // let {history} = this.props;
      // let auth = this.props.authStuff.useAuth;
    
      return this.state.permit ? (
        // returns an empty div. Used to return a signOut button in the example it came from
        <div></div>
      ) : (
        <div>
          <NavNLI />
          <h1>Notable</h1>
          <h3>
          Make your notes more notable!
          <br/><br/>Login below!<br/><br/>
          {/* Popup for login page. Login page now acts as popup. */}
          {/* <LoginPage /> */}
        </h3>
        <Redirect
                to={{
                  pathname: "/login"
                }}
              />
              {/* <LoginPage /> */}
        </div>
      );
            }
  }
  
  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  // function PrivateRoute({ children, ...rest }) {
    class PrivateRoute extends Component {
      constructor(props){
        super(props);
        this.state = {
          userInfo: this.props.userInfo, //Create some default JSON data
          permit: false
        }
      }

      componentDidMount() {
        this.state.permit = this.props.permit;
        this.state.userInfo = this.props.userInfo;
      }
      render(){
        // let auth = this.props.authStuff.useAuth;
        return (
          <Route
            // {...rest}
            render={() =>
              this.state.permit ? (
                <Dashboard userInfo={this.state.userInfo}/>
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                  }}
                />
              )
            }
          />
        );
      }
  }
  // In your project the Welcome page
  // function PublicPage() {
  //   return <h3>Public</h3>;
  // }
  
  
  // In your page the Dashboard
  // function Dashboard() {
  //   return <h3>Protected</h3>;
  // }
  
  
  //In your page the Login
  class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userInfo: [],
        permit: false
      }
    }

    componentDidMount() {
      this.state.permit = this.props.permit;
    }

    render(){
      // let location = this.props.location;
      // let auth = this.props.authStuff;
    
      let { from } = {from: {pathname: "/"}} || { from: { pathname: "/dashboard" } };
      let login = () => {
        console.log("I'm in login!");
        // obtain users username and password
        var user = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        // Make sure user and password or not empty or something else weird
        // Use the message.js once that has been made and tested.
        if(user.length!==0) {
          if(password.length!==0){
            axios.get('http://localhost:8000/login', {params : {
              username: user,
              password: password
            }})
            .then((response) => {
              //if there is no error, redirect the user to the dashboard
              // console.log(response.data);
              this.state.userInfo = response.data;
              console.log(this.state.userInfo);
              this.state.permit = true;
              const {history} = this.props;
              history.push(from, {state: this.state});
              // auth.useProvideAuth.signin(user, () => {
              //   // history = userInfo;
              //   const {history} = this.props;
              //   history.replace(from, {userInfo: this.state.userInfo});
              // });
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
      return (
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
              Username:
              <input className="username" id="username"/>
              <br /><br />
                Password:
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
  }