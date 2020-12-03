import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './Components/Styles/App.css';
import Dashboard from './Components/dashboard';
import NewNote from './Components/newNote';
import { LoginProvider } from './Components/loginContext';
import Welcome from './Components/welcome';
import Login from './Components/login';

const axios = require('axios');

// Make it all functional again and break it down to be simpler

//This is going to be cut down to be really simple due to useContext

export default function App(props) {
    return (
      <div className="App">
        <LoginProvider>
        <Router>
          <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/login" component={Login} />
              {/* Hopefully we won't have to pass the user as a prop here anymore */}
              <Route exact path="/dashboard" component={Dashboard} user={props} />
              <NewNote exact path="/newNote" component={NewNote} />
          </Switch>
        </Router>
        </LoginProvider>
      </div>
    );
  }