import React from 'react';
import './Styles/App.css';

function Main() {
	return (

		<div>
			<title>Main Page</title>
			<h1 className="greeting">Hello User51654321321654654</h1>

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

export default Main;
