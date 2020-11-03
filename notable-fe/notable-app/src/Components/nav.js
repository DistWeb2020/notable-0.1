import React from 'react';
import './Styles/App.css';
import {Link} from 'react-router-dom';
function Nav() {
  return (
      <nav>
      <ul className="App-nav-links">
          <Link className="my-nav" to="/login" >
            <li>Login</li>
          </Link>
          <Link className="my-nav" to="/main">
            <li>Main</li>
          </Link>
          <Link className="my-nav" to="/newNote">
            <li>New Note</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Nav;
