import React from 'react';
import './Styles/App.css';
import {Redirect} from 'react-router-dom';
import Main from './main';
import Popup from 'reactjs-popup';

const axios = require('axios');

//Figure out how to use react-router to go to next page
//Figure out how to use props to send data to that particular component you are creating. i.e. when you say <Main data={"someData": "data"} /> this.props.data.someData will be used to access that data in Main




// const xhttp = new XMLHttpRequest();
// var response = {};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes:{}
    };
  }
  //verifies login information by doing a fetch (GET) to the server
  async verifyLogin() {
    console.log("I'm in callRoutes!");
    // obtain users username and password
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;


axios.get('http://localhost:8000/login', {params : {
  username: user,
  password: password
}})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});

  

    // console.log(response);
    // const json_response = response.json();
    // console.log(json_response);
    // json_response
    //   .then(notes => {
    //     this.setState({notes}, console.log('Notes fetched..', notes));
    //     console.log(this.props.notes);
    //     //send user to main page?
    //   // return <Redirect><Main /></Redirect>;
    //   } 
    //   )
    //   .catch((err, res) => {
    //     console.log('Error!');
    //     // console.log(res.json());
    //     console.error(err);
    //   }); // get the json from the response. Set up the state of the "response" prop to be whatever came from the res
    // //need to find way to check for status first for conditional handling
  }

  close() {
    document.getElementById('login').blur();
    document.getElementById('login').style.display ='none';
  }

// renders the login page
  render() {
    return (
      <Popup
    trigger={<button id="login-button" className="home-button"> Login </button>}
    modal
    nested
  >
    <div id="login" className="modal">
        <button className="close" onClick={this.close}>
          &times;
        </button>
        <div className="header">Notable</div>
        <div className="login content">
          Username:
          <input className="username" id="username"/>
          <br /><br />
            Password:
          <input className="password" id="password" type="password" />
          <br /><br />
          <button onClick={ this.verifyLogin }>Login</button>
        </div>
        <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              this.close();
            }}
          >
            close modal
          </button>
      </div>
  </Popup>
      
    );
  }
}

// sets default export to Login
export default Login;