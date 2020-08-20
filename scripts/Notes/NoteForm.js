import {saveNote, editNote, useNotes} from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("editNote", customEvent => {
    const AllOfTheNotes = useNotes()
    console.log(event.detail)
    const noteID = event.detail.noteID
    const noteObject = AllOfTheNotes.find(note => note.id === noteID)
    console.log(noteID)
    
    const noteTitle = document.querySelector("#note--title")
    const noteAuthor = document.querySelector("#note--author")
    const noteContent = document.querySelector("#note--content")
    const noteCriminal = document.querySelector("#criminalSelect")
    const id = document.querySelector("#noteId")
        
    noteTitle.value = noteObject.title
    noteAuthor.value = noteObject.author
    noteContent.value = noteObject.content
    noteCriminal.value = noteObject.criminalId
    id.value = noteID




})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteTitle = document.querySelector("#note--title")
        const noteAuthor = document.querySelector("#note--author")
        const noteContent = document.querySelector("#note--content")
        const crimeId = document.querySelector("#criminalSelect")
        const [prompt, criminalId] = crimeId.value.split("--") //splitting at --. the prompt holds criminal
        // Make a new object representation of a note. //

        if (noteTitle.value && noteAuthor.value && noteContent.value && crimeId.value) {
            const id = document.querySelector("#noteId")

            if (id.value === "") {
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
                render()
            } else {
                const EditedNote = {
                    title: noteTitle.value,
                    criminalId: parseInt(crimeId.value),
                    author: noteAuthor.value,
                    content: noteContent.value,
                    timestamp: Date.now(),
                    id: parseInt(id.value)
                }
                editNote(EditedNote)
                id.value = ""
            }
        }
    }
})

const render = () => {
    getCriminals().then(() => {const allCriminals = useCriminals() // calling get Criminals. added a select below to render a list of criminals. 
    contentTarget.innerHTML = `
        <input type="text" id ="note--title" placeholder="Enter note title" autofocus required/> 
        <input type="text" id ="note--author" placeholder="Your name here" required/>
        <textarea id="note--content" placeholder="Place text here" required /> </textarea> 
        
        
        
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
        <input type="hidden" id="noteId" name="noteId" value="">
    `
})
}

export const NoteForm = () => {
    render()
}
