import React from 'react';
import './Styles/App.css';
import {Redirect} from 'react-router-dom';
import Main from './main';
import Login from './login';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Popup from 'reactjs-popup';

const axios = require('axios');


// First screen user is greeted with. The login button allows them to login with a popup modal. 
class Welcome extends React.Component {

// renders the login page
  render() {
    return (
      <div>
        <h1>Notable</h1>
        <h3>
            Make your notes more notable!
            <br/><br/>Login below!
        </h3>
        {/* Popup for login page. Login page now acts as popup. */}
        <Login />

      </div>
    );
  }
}

// sets default export to Login
export default Welcome;