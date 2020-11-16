import React from 'react';
// import { useHistory } from 'react-router-dom';
import './Styles/App.css';
import Nav from './nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const notes = [];

// funtion componentDidMount() {
// 	//look at data from login and put it in a nice little JSON
// 	// console.log("userData", this.props.location.state.userData);
// 	//grab data from notes API and put in JSON
// }



export default function Dashboard() {


console.log("I made it to the dashboard.");

	//function search() //Allows user to search the notes
	
	//function populateScrollArea() //show list of notes use the notes API
	
	//function populatePreview() //make the preview in to a nice little card
	
	//function moveToNewNote() //User wants to make a newnote

	return (

			<div>
				<Nav />
				<title>Dashboard</title>
				<h1 className="greeting">Hello User51654321321654654</h1>
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
									<table className="noteList">
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
										</tr>
										<tr>
											<td>Note 1</td>
										</tr>
									</table>
								</div>
	
								<button className="newNote">New Note</button>
							</div>
						</td>
	
						<td>
							<div>
								Preview:
	<br />
								<textarea className="notePreview"></textarea>
							</div>
						</td>
					</tr>
				</table>
			</div>
		);
	
}
