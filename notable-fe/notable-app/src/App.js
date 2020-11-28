import React, {useContext, createContext, useState} from 'react';
import {Redirect, Link, Switch, Route, useHistory, useLocation, BrowserRouter as Router} from 'react-router-dom';
import './Components/Styles/App.css';
import Dashboard from './Components/dashboard';
import NewNote from './Components/newNote';
import Message from './Components/message';
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
              <Route exact path="/dashboard" component={Dashboard} user={props} />
              <NewNote exact path="/newNote" component={NewNote} />
          </Switch>
        </Router>
        </LoginProvider>
      </div>
    );
  }