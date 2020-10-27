import React from 'react';
import './Styles/App.css';
import {Link} from 'react-router-dom';
function Nav() {
  const navStyle = {
    color: 'white'
  };
  return (
      <nav>
      <ul className="App-nav-links">
          <Link style={navStyle} to="/login" >
            <li>Login</li>
          </Link>
          <Link style={navStyle} to="/main">
            <li>Main</li>
          </Link>
          <Link style={navStyle} to="/newNote">
            <li>New Note</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Nav;
