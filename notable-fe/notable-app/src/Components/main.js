import React from 'react';
import './Styles/App.css';

function Main() {
	return (

		<div>
			<title>Main Page</title>
			<h1 class="greeting">Hello User51654321321654654</h1>

			<table>
				<tr>
					<td>
						<div>
							<form class="search">
								Search:
    <input />
							</form>

							<div class="noteSelection">
								<table class="noteList">
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

							<button class="newNote">New Note</button>
						</div>
					</td>

					<td>
						<div>
							Preview:
<br />
							<textarea class="notePreview"></textarea>
						</div>
					</td>
				</tr>
			</table>
		</div>
	);
}

export default Main;
