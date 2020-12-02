﻿import React from 'react';
import './Styles/App.css';
import Nav from './nav';
import { useState } from 'react';

const axios = require( 'axios' );

function NewNote( props ) {
  //Retrieve logged in user and the noteID of the note to edit
  const [ user, setUser ] = useState( props.location.state.user );
  //Make sure initial isn't null. Like from a reload. Rename this dataID. This is how you know what note you are dealing with
  const [ dataID, setDataID ] = useState( props.location.state.dataID );
  //Local variables to hold previous information
  var localUser = user;
  //Make a boolean. Change it when we know we are editing an existing note
  var editNote = false;
  var localNoteID;

  //A noteID must be greater than 0
  if ( dataID > 0 ) {
    //Assign value to local variable
    localNoteID = dataID;
  } else {
    //Set val to -1 to indicate new note
    localNoteID = -1;
  }

  //Store information about note
  var name;
  var text;
  var date;

  //Local variable to store get response
  var note;

  //Only enter if we are editing a note
  if ( localNoteID != -1 ) {

    //Index for correct note
    var index;

    //Get request for data
    //Change route to /notes/content
    axios.get( 'http://localhost:8000/note/content', {
      params: {
        //This should be the user from the dashboard
        dataid: dataID
      }
    } )
      .then( ( response ) => {
        console.log(dataID);
        //Assign response to local variable
        note = response.data;
        console.log(note);
        //Loop through a users notes and find one with matching noteID
        // for ( var i = 0; i < notes.length; i++ ) {
        //   if ( notes[ i ].noteid == localNoteID ) {
        //     index = i;
        //   }
        // }

        //Populate UI with name and text of note
        document.getElementById( "name" ).value = note[0].name;
        document.getElementById( "noteText" ).value = note[0].text;

      }
        , (error) => {
          alert("Could not retrieve your note right now.\nThe server is probably down.");
          console.log(error);
        }
      );
  }

  //Save button
  let save = () => {
    name = document.getElementById( "name" ).value;
    text = document.getElementById( "noteText" ).value;

    //Get current date
    date = new Date();
    var dd = String( date.getDate() ).padStart( 2, '0' );
    var mm = String( date.getMonth() + 1 ).padStart( 2, '0' ); //January is 0!
    var yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;

    //Note must have a name
    if ( name.length == 0 ) {
      alert( "Please give your note a name" )

      //Change conditional to deal with boolean
      //check if we are creating new note or editing
    } else if ( localNoteID == -1 ) {

      //create new note
      axios.post( 'http://localhost:8000/create', {
        user: localUser.userid,
        name: name,
        text: text,
        date: date,
        img: ""
      } )
        //Add alert to tell user note is saved
        .then( ( response ) => {
          alert( "Your note has been saved!" );
          //Once current note is saved shoud update bool to be updating current note
        } )
    } else {

      //send update to note
      axios.post( 'http://localhost:8000/update', {
        noteid: note[0].noteid,
        text: text,
        name: name
      } )
        // Add alert to tell user note is saved
        .then( ( response ) => {
          alert( "Your note has been updated and saved!" );
        } )
    }
  }

  //Function to edit note visuals
  let changeTextVisual = () => {

    //Retrieve font and font size
    var fontVal = "font-family:" + document.getElementById( "fontSelect" ).value + "; ";
    var sizeVal = "font-size:" + document.getElementById( "sizeSelect" ).value + "px;";

    //Combine into one variable
    var allChanges = fontVal + sizeVal;

    //Check if bold or italics selected
    if ( document.getElementById( "bold" ).checked == true ) {
      allChanges += " font-weight:bold;";
    }

    if ( document.getElementById( "italics" ).checked == true ) {
      allChanges += " font-style:italic;";
    }

    //Apply changes
    document.getElementById( "noteText" ).style = allChanges;
  }


  return (
    <div className="newNote">
      <Nav user={ user } />
      {/* <div className="container">
          {/* Fix the styling later */}
      {/* </div> */ }
      {( editNote ? <h1>Edit Note</h1> : <h1>New Note</h1> ) }
      {/* <h1>New Note</h1> */ }
      <table>
        <tr>
          <td>
            <input id="name" className="titleName" placeholder="Title" />
            <br /><br />
            <textarea id="noteText" className="noteText" placeholder="Write something... notable"></textarea>
          </td>

          <td id="lside">
            Fonts:&nbsp;
            <select id="fontSelect" className="fontDrop" onChange={ changeTextVisual }>
              <option value="Times">Times</option>
              <option value="Georgia">Georgia</option>
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
            </select>
            <br /><br />

            Size:&nbsp;
            <select id="sizeSelect" className="fontDrop" onChange={ changeTextVisual }>
              <option value="20">20</option>
              <option value="34">34</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
            <br /><br />
            <input type="checkbox" className="checkbox" id="bold" onChange={ changeTextVisual } />
            <label for="bold">Bold</label>
            <br /><br />
            <input type="checkbox" className="checkbox" id="italics" onChange={ changeTextVisual } />
            <label for="italics">Italics</label>
            <br /><br />
            <button className='save' onClick={ save }>Save</button>
          </td>

        </tr>
      </table>
    </div>
  );

}

export default NewNote;