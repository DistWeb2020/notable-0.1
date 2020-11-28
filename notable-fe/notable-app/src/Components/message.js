// This component will be a pop up for when 
// something needs to be told to the user.
// Espicially errors.

import React from 'react';
import './Styles/App.css';
import Popup from 'reactjs-popup';

const axios = require( 'axios' );

class Message extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      messageNeeded: false
    };
  }

  close() {
    document.getElementById( 'message' ).blur();
    document.getElementById( 'message' ).style.display = 'none';
  }
  
  // renders the login page
  render() {
    return (
      <Popup
        //Figure out how to make the popup happen when an error occurs. Probably a prop boolean variable, or the err response from GET/POST.
        trigger={ <button id="message-button" className="home-button">Message</button> }
        modal
        nested
      >
        <div id="message" className="modal">
          <button className="close" onClick={ this.close }>
            &times;
          </button>
          <div className="header">Notable</div>
          <div className="content">
            I can be any type of message you want.
          </div>
          <button
            className="button"
            onClick={ () => {
              this.close();
            } }
          >
            close modal
            </button>
        </div>
      </Popup>
  
    );
  }

}

// sets default export to Login
export default Message;