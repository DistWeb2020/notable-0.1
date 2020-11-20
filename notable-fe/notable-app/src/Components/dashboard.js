import React from 'react';
import { useHistory } from 'react-router-dom';
import './Styles/App.css';
import Nav from './nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Component } from 'react';

// funtion componentDidMount() {
// 	//look at data from login and put it in a nice little JSON
// 	// console.log("userData", this.props.location.state.userData);
// 	//grab data from notes API and put in JSON
// }

export default class Dashboard extends Component {
	constructor(props) {
		super(props) 
			this.state = {
				notes: [],
				noteList: this.props.userInfo.user.notes
			}
	}

	render(){

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

	console.log(this.state.noteList);
	
	return (

			<div>
				<Nav />
				<title>Dashboard</title>
				<h1 className="greeting">Hello {this.props.user.firstname} {this.props.user.lastname}!</h1>
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
										{this.state.noteList.map(note =>(
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
}
