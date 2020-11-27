import React from 'react';
import './Styles/App.css';
import {Link, Route, Redirect} from 'react-router-dom';
function NavNLI() {
  return (
      <nav className="my-nav">
      <ul className="App-nav-links">
        {/* Just using the welcome page as the login page */}
          <Link className="my-nav" to="/" >
            <li>Welcome</li>
          </Link>
        </ul>
      </nav>
  );
}


export default NavNLI;