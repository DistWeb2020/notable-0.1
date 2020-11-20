﻿import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './Styles/App.css';
import Nav from './nav';
import NewNote from './Components/newNote';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Component } from 'react';
import { useLogin, useUserInfo } from './loginContext';

// function componentDidMount() {
// 	//look at data from login and put it in a nice little JSON
// 	// console.log("userData", this.props.location.state.userData);
// 	//grab data from notes API and put in JSON
// }

export default function Dashboard() {
	// const user = props.history.location.state;
	const user = useUserInfo(); //Use this or the state that is passed form the redirect?
	const permit = useLogin(); //Should use only if the user for some reason can still get to this route if they just typed it in, which is likely
	// const history = useHistory(); //

  console.log("I made it to the dashboard.");

	//function search() //Allows user to search the notes
	var search = () => {
		//First Idea:
		//Do a Query in database
		//With the response update the notes and noteList states with searchResults
		//Hopefully page updates because of change in state
	}

	//function populatePreview() //make the preview in to a nice little card
  var populatePreview = () => {
	//Send the paramaters to /login
	//parameter would probably be userId (check postman to be sure), but it would be taken from the prop sent from loginPage

	//Plop note text in text area
}

	//function moveToNewNote() //User wants to make a newnote
	var moveToNewNote = () => {
		//Redirect
	}

	// console.log(user.notes);
	
	return permit? (
		<div>
			{/* Redirect to Welcome with Login */}
			<Redirect to={{
				pathname='/'
			}}/>
		</div>
	):(

			<div>
				<Nav />
				<title>Dashboard</title>
				<h1 className="greeting">Hello {user.firstname} {user.lastname}!</h1>
				{/* <h1>Status: {this.props.loggedInStatus}</h1> */}
				<table>
					<tr>
						<td>
							<div>
								<form className="search">
									Search:
			<input />
								</form>
	
								<div className="noteSelection">
									{/* {populateNoteList} */}
									<table id="noteList" className="noteList">
										{/* Table is populated using a mapping from noteList */}
										{/* May want to make the element within the td a button instead of just text. Unless an onClick is available for td. */}
										{user.notes.map(note =>(
											<tr>
												<td key={note.name}>{note.name}</td>
											</tr>
										))}
										{/* <tr>
											<td>Note 1</td>
										</tr>
										<tr>
											<td>Note 1</td>
										</tr>
										<tr>
											<td>Note 1</td>
										</tr>
										<tr>
											<td>Note 1</td>
										</tr>
										<tr>
											<td>Note 1</td>
										</tr>
										<tr>
											<td>Note 1</td>
										</tr>
										<tr>
											<td>Note 1</td>
										</tr> */}
									</table>
								</div>
	
								<button className="newNote">New Note</button>
							</div>
						</td>
	
						<td>
							<div>
								Preview:
	<br />
								<textarea id="notePreview" className="notePreview"></textarea>
							</div>
						</td>
					</tr>
				</table>
			</div>
		);
}