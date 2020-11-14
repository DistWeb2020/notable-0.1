import React, {useContext, createContext, useState} from 'react';
import './Styles/App.css';
import {Redirect, Link, Switch, Route, Redirect, useHistory, useLocation, Router} from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';

const axios = require('axios');


// First screen user is greeted with. The login button allows them to login with a popup modal. 
function Welcome() {

// renders the login page
return (
  <ProvideAuth>
    <Router>
    <div>
        <h1>Notable</h1>
        <AuthButton />
        <Switch>
          <ProtectedRoute to="/dashboard">
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  </ProvideAuth>
);
}

// This is the authentication to check if the user is in the db of users
const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    // So here you would say "if user is in db, set fake.auth.isAuthenticated to true;else do nothing(redirect?give user message)"
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    // Log the user out
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  // setUser and user are now useSate functions that take a parameter that is the state of the user
  // what about a password? or do you check for the user and do all the setUser and user afterward
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}


function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <div>
      {/* Add sign out button to nav? */}
      <h3>User is logged in</h3>
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </div>
  ) : (
    <h3>
      Make your notes more notable!
      <br/><br/>Login below!<br/><br/>
      {/* Popup for login page. Login page now acts as popup. */}
      <Login />
    </h3>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
// In your project the Welcome page
// function PublicPage() {
//   return <h3>Public</h3>;
// }


// In your page the Dashboard
// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }


//In your page the Login
// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     auth.signin(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }





// sets default export to Welcome
export default Welcome;