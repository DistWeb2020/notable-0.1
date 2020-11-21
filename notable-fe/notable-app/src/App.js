import React from 'react';
import './Components/Styles/App.css';
import Login from './Components/login';
import Main from './Components/main';
import NewNote from './Components/newNote';
import Nav from './Components/nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const axios = require('axios');

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main}/>
        <Route path="/newNote" component={newNote} />
      </Switch>
    </div>
    </Router>
    
  );
}

function newNote() {

  let save = () => {
    var user = 1;
    var name = document.getElementById("name").value;
    var text = document.getElementById("noteText").value;
    //Get current date
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;
    
    if (name.length !== 0) {
        axios.post('http://localhost:8000/create', {
        user: user,
        name: name,
        text: text,
        date: date,
        img: ""
      })
      .then((response) => {
        console.log(response);
      })

    } else {
      alert("Please give your note  name")
    }
  }
  
  return (
    <div>
        <title>New Note</title>
        <table>
        <tr>
            <td>
                <input id="name" placeholder="Title" />
                <br /><br />
                <textarea id="noteText" class="noteText" placeholder="Write something... notable"></textarea>
            </td>

            <td id="lside">
                Fonts:
                <select>
                    <option value="Times">Times</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Arial">Arial</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <br /><br />

                Size:
                <select>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <br /><br />
                <input type="checkbox" id="bold" />
                <label for="bold">Bold</label>
                <br /><br />
                <input type="checkbox" id="italics" />
                <label for="bold">Italics</label>
                <br /><br />
                <button onClick={ save }>Save</button>
            </td>

        </tr>
    </table>
    </div>
);
  
}

export default App;