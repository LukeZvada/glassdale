import {saveNote} from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteTitle = document.querySelector("#note--title")
        const noteAuthor = document.querySelector("#note--author")
        const noteContent = document.querySelector("#note--content")
        // Make a new object representation of a note. //
        const newNote = {
            // Key/value pairs here
            title: noteTitle.value,
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})



const render = () => {
    const allCriminals = useCriminals()
    contentTarget.innerHTML = `
        <input type="text" id ="note--title" placeholder="Enter note title" /> 
        <input type="text" id ="note--author" placeholder="Your name here" />
        <textarea id="note--content" placeholder="Place text here" /> </textarea> 

        <select class="dropdown" id="criminalSelect">
        <option value="0">Please select a criminal...</option>
        ${
            allCriminals.map(
                criminalsObject => {
                    return `<option value="${ criminalsObject.id }">${criminalsObject.name}</option>`
                }
            ).join("") //gets rid of the comma in the array when logged
        }
    </select>

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}
