import React from 'react';
import './Styles/newNote.css';

function NewNote() {
return (
    <div>
        <title>New Note</title>
        <table>
        <tr>
            <td>
                <input id="name" placeholder="Title" />
                <br /><br />
                <textarea id="noteText" class="noteText" placeholder="Write something... notable"></textarea>
            </td>

            <td id="lside">
                Fonts:
                <select>
                    <option value="Times">Times</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Arial">Arial</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <br /><br />

                Size:
                <select>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <br /><br />
                <input type="checkbox" id="bold" />
                <label for="bold">Bold</label>
                <br /><br />
                <input type="checkbox" id="italics" />
                <label for="bold">Italics</label>
                <br /><br />
                <button>Save</button>
            </td>

        </tr>
    </table>
    </div>
);
}

export default NewNote;