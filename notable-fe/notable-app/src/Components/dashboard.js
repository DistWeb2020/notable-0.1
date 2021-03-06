﻿﻿import React from 'react';
import { Redirect, useHistory} from 'react-router-dom';
import './Styles/App.css';
import Nav from './nav';
import NewNote from './newNote';
import {Prompt} from 'react-router-dom';
import { Component, useState } from 'react';
import { useLogin, useUserContext } from './loginContext';
import { useEffect } from 'react';
const axios = require('axios');


export default function Dashboard() {
	//If user refreshes page the props kind of disappear. Causes a crash.
	//Need to set up a case for when props.location.state.user is null and find out who the current user is.
	const [user, setUser] = useUserContext();
	// const [user, setUser] = useState(props.location.state.user); //Use this or the state that is passed form the redirect?
	const [note, setNote] = useState(0);

	const [permit, setPermit] = useLogin();
	// const permit = useLogin(); //Should use only if the user for some reason can still get to this route if they just typed it in, which is likely
	const history = useHistory(); 

	var dataID;
	//Prevents on re-render when moving to another component when you click editNote
	var movingOn = false;
	useEffect(() => {

		//retrieve the note and set the text preview 
		if (note != 0) {
			axios.get('http://localhost:8000/note/content', {
				params: {
					dataid: note
				}
			})
				.then((response) => {
					if(movingOn===false){
					document.getElementById("notePreview").textContent = response.data[0].text;
					document.getElementById("noteName").textContent = response.data[0].name;
					dataID = response.data[0].dataref;
					setUser(userInfo => ({
						...userInfo,
						currentDataID: dataID
					}))
				}
				})
		}
	}, [note]);

	//Figure out how to change permit to false when user goes back to login page
	// window.onbeforeunload = function () {
	// 	setPermit(false);
  // }


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
				<h1 className="greeting">Hello {user.userInfo.firstname} {user.userInfo.lastname}!</h1>
				<table cellPadding="0px">
					<tr>
						<td>
							<div>
									Select a Note:
								<div className="noteSelection">
									{/* {populateNoteList} */}
									<table id="noteList" className="noteList">
										{/* Table is populated using a mapping from noteList */}
										{/* May want to make the element within the td a button instead of just text. Unless an onClick is available for td. */}
										<thead></thead>
										<tbody>
											{user.userInfo.notes.map(note => (
												<>
												<tr>
													<td className="note-list" onClick={() => setNote(note.dataid)}>{note.name}</td>
												</tr>
												<tr><hr className="note-list-hr"/></tr>
												</>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</td>

						<td>
							<div cellPadding="20px">
								Preview of &nbsp;
								<label id="noteName" style={{fontWeight: "bold"}}> </label>
								<br></br><br></br>
								<button className="editButton" onClick={() => {
									let path = "/newNote";
									movingOn = true;
									history.push({pathname:path,state:{newNote:false}});
									{/*This is actually the dataID not the noteID*/}
								
								}}> Edit Note </button> < br />< br />
								<textarea id="notePreview" readOnly={true} className="notePreview"></textarea>

							</div>
						</td>
					</tr>
				</table>
			</div>
			</>
		);
}