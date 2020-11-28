import React from 'react';
import './Styles/App.css';
import {Link} from 'react-router-dom';
function Nav(props) {
  return (
      <nav className="my-nav">
      <ul className="App-nav-links">
        {/* Just using the welcome page as the login page */}
          {/* <Link className="my-nav" to="/" >
            <li>Welcome</li>
          </Link> */}
          <Link className="my-nav" to={{
            pathname: "/dashboard",
            state: {user: props.user}
          }}>
            <li>Dashboard</li>
          </Link>
          <Link className="my-nav" to={{
            pathname: "/newNote",
            state: {user: props.user, noteID: props.noteID}
          }}>
            <li>New Note</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Nav;