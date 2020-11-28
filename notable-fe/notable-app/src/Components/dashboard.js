﻿import React from 'react';
import { Redirect, useHistory} from 'react-router-dom';
import './Styles/App.css';
import Nav from './nav';
import NewNote from './newNote';
import {Prompt} from 'react-router-dom';
import { Component, useState } from 'react';
import { useLogin, useUserInfo, useUpdateLogin } from './loginContext';
import { useEffect } from 'react';
const axios = require('axios');

// function componentDidMount() {
// 	//look at data from login and put it in a nice little JSON
// 	// console.log("userData", this.props.location.state.userData);
// 	//grab data from notes API and put in JSON
// }

export default function Dashboard(props) {

	// const user = props.history.location.state;
	var userInfo = useUserInfo();
	const [user, setUser] = useState(props.location.state.user); //Use this or the state that is passed form the redirect?
	const [note, setNote] = useState(0);

	const permit = useLogin(); //Should use only if the user for some reason can still get to this route if they just typed it in, which is likely
	const history = useHistory(); 

	var noteID;

	useEffect(() => {
		// 	const [user, setUser] = useState(props.location.state.user);
		// },[permit])

		//retrieve the note and set the text preview 
		if (note != 0) {
			axios.get('http://localhost:8000/note/content', {
				params: {
					dataid: note
				}
			})
				.then((response) => {
					console.log(response.data[0].text);
					document.getElementById("notePreview").textContent = response.data[0].text;
					document.getElementById("noteName").textContent = response.data[0].name;

					noteID = response.data[0].noteid;
					console.log(noteID);
				})
		}
	});

	// const history = useHistory(); //
	const togglePermit = useUpdateLogin();
	var location = {};
  console.log("In Dashboard");
	console.log(permit);
	console.log(props);
	// useEffect(() => {
		
	// })

	// console.log("I made it to the dashboard.");
	// console.log(user);

	//function search() //Allows user to search the notes
	var search = () => {
		//First Idea:
		//Do a Query in database
		//With the response update the notes and noteList states with searchResults
		//Hopefully page updates because of change in state
	}

	//function populatePreview() //make the preview in to a nice little card
	var populatePreview = (key) => {
		console.log(key);
		//Send the paramaters to /login
		//parameter would probably be userId (check postman to be sure), but it would be taken from the prop sent from loginPage

		//Plop note text in text area
	}

	//function moveToNewNote() //User wants to make a newnote
	var moveToNewNote = () => {
		//Redirect
	}

	// console.log(user.notes);
	
	window.onbeforeunload = function () {
		togglePermit();
		console.log(permit);
  }


	return permit===false? (
		<div>
			{/* Redirect to Welcome with Login */}
			<Redirect to={{
				pathname: '/'
			}} />
		</div>
	):(
			<>
			<Prompt
  message={(location) => {
		
		return location.pathname.startsWith("/login")
		? "Are you sure you want to leave?\nYou will be signed out."
		:true
	}}
/>
			<div className="dashboard">
				<Nav user={user} />
				<title>Dashboard</title>
				<h1 className="greeting">Hello {user.firstname} {user.lastname}!</h1>
				{/* <h1>Status: {this.props.loggedInStatus}</h1> */}
				<table cellPadding="30px">
					<tr>
						<td>
							<div>
								<form className="search">
									SEARCH <input/>
								</form>

								<div className="noteSelection">
									{/* {populateNoteList} */}
									<table id="noteList" className="noteList">
										{/* Table is populated using a mapping from noteList */}
										{/* May want to make the element within the td a button instead of just text. Unless an onClick is available for td. */}
										<thead></thead>
										<tbody>
											{user.notes.map(note => (
												<tr>
													<td onClick={() => setNote(note.dataid)}>{note.name}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</td>

						<td>
							<div cellPadding="20px">
								Preview of - 
								<label id="noteName"> </label> <button onClick={() => {
									let path = "/newNote";
									history.push({pathname:path, state:{noteID: noteID, user: user}})
								
								}}>Edit Note</button> < br />< br />
								<textarea id="notePreview" readOnly={true} className="notePreview"></textarea>

							</div>
						</td>
					</tr>
				</table>
			</div>
			</>
		);
}