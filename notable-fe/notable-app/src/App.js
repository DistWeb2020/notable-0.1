import React from 'react';
import './Components/Styles/App.css';
import Login from './Components/login';
import Main from './Components/main';
import NewNote from './Components/newNote';
import Message from './Components/message';
import { LoginProvider } from './Components/loginContext';
import Welcome from './Components/welcome';
import Login from './Components/login';

const axios = require('axios');

// Make it all functional again and break it down to be simpler

//This is going to be cut down to be really simple due to useContext

export default function App() {
    return (
      <div className="App">
        <LoginProvider>
        <Router>
          <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <NewNote exact path="/newNote" component={NewNote} />
          </Switch>
        </Router>
        </LoginProvider>
      </div>
    );
  }
