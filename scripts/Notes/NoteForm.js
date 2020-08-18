import {saveNote} from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteTitle = document.querySelector("#note--title")
        const noteAuthor = document.querySelector("#note--author")
        const noteContent = document.querySelector("#note--content")
        const crimeId = document.querySelector("#criminalSelect")
        const [prompt, criminalId] = crimeId.value.split("--") //splitting at --. the prompt holds criminal
        // Make a new object representation of a note. //
        const newNote = {
            // Key/value pairs here
            title: noteTitle.value,
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now(),
            criminalId: parseInt(criminalId) //parseInt turns a string into an integer 
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    getCriminals().then(() => {const allCriminals = useCriminals() // calling get Criminals. added a select below to render a list of criminals. 
    contentTarget.innerHTML = `
        <input type="text" id ="note--title" placeholder="Enter note title" /> 
        <input type="text" id ="note--author" placeholder="Your name here" />
        <textarea id="note--content" placeholder="Place text here" /> </textarea> 

        <select class="dropdown" id="criminalSelect"> 
        <option value="0">Please select a criminal...</option>
        ${
            allCriminals.map(
                criminalsObject => {
                    return `<option value="criminal--${ criminalsObject.id }">${criminalsObject.name}</option>`
                } // got the select button from conviction select. added criminal--??? 
            ).join("") 
        }
    </select>

        <button id="saveNote">Save Note</button>
    `
})
}

export const NoteForm = () => {
    render()
}
