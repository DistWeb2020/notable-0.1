import React, {useState, useEffect} from 'react';
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

const Dashboard = ({user}) => {
	const {userInfo, setUserInfo} = useState();

	//Get current userInfo
	useEffect(() => {
		setUserInfo(user.current);
	});


console.log("I made it to the dashboard.");

	//function search() //Allows user to search the notes
	
	//function populateScrollArea() //show list of notes use the notes API
	// let noteList = props.user.notes;

	let populateScrollArea = () => {

	}

	//function populatePreview() //make the preview in to a nice little card
	
	//function moveToNewNote() //User wants to make a newnote
	// let userInfo = props.user;
	console.log(props.user);
	// console.log(userInfo);
	// let noteList = props.user.notes;
	// console.log(noteList);
	
	
	return (

			<div>
				<Nav />
				<title>Dashboard</title>
				<h1 className="greeting">Hello {props.user.firstname} {props.user.lastname}!</h1>
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
										{props.user.notes.map(note =>(
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
								<textarea className="notePreview"></textarea>
							</div>
						</td>
					</tr>
				</table>
			</div>
		);
	
}

export default React.memo(Dashboard);
