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
  //Waiting on merge to determine how we're keeping track of current logged in user
  var user = 1;
  var name;
  var text;
  var date;
  //noteId needs to be passed in if updating a note. Make noteId -1 if new note
  var noteId = 213;

  var notes;

  if (noteId != -1) {
    var index;

    axios.get('http://localhost:8000/notes', {params : {
      userid: 1
    }})
    .then((response) => {
      console.log(response);
      notes = response.data;

      for (var i = 0; i < notes.length; i++) {
        if(notes[i].noteid == noteId) {
          index = i;
        }
      } 
  
      document.getElementById("name").value = notes[index].name;
      document.getElementById("noteText").value = notes[index].text;

    }, (error) => {
      // Use message.js to display some error message to the user telling them to try again or signup
      console.log(error);
    });
  }

  let save = () => {
    user = 1;
    name = document.getElementById("name").value;
    text = document.getElementById("noteText").value;
    //Get current date
    date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;
    
    if (name.length == 0) {
      alert("Please give your note a name")
    } else if (noteId == -1){
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
      axios.post('http://localhost:8000/update', {
        noteid: noteId,
        text: text
      })
      .then((response) => {
        console.log(response);
      })
    }
  }

  let changeTextVisual = () => {
    var fontVal = "font-family:" + document.getElementById("fontSelect").value + "; ";
    var sizeVal = "font-size:" + document.getElementById("sizeSelect").value + "px;";

    var allChanges = fontVal + sizeVal;

    if(document.getElementById("bold").checked == true) {
      allChanges += " font-weight:bold;";
    }

    if(document.getElementById("italics").checked == true) {
      allChanges += " font-style:italic;";
    }

    document.getElementById("noteText").style = allChanges;
  }
  
  return (
    <div>
        <title>New Note</title>
        <table>
        <tr>
            <td>
                <input id="name" placeholder="Title" />
                <br /><br />
                <textarea id="noteText" class="noteText" placeholder="Write something... notable" stlye=""></textarea>
            </td>

            <td id="lside">
                Fonts:
                <select id="fontSelect" onChange={ changeTextVisual }>
                    <option value="Times">Times</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Arial">Arial</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <br /><br />

                Size:
                <select id="sizeSelect" onChange={ changeTextVisual }>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <br /><br />
                <input type="checkbox" id="bold" onChange={ changeTextVisual }/>
                <label for="bold">Bold</label>
                <br /><br />
                <input type="checkbox" id="italics" onChange={ changeTextVisual }/>
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