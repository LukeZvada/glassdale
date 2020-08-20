import {saveNote, useNotes} from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("editNote", customEvent => {
    const AllOfTheNotes = useNotes()
    const noteId = event.detail.notId
    const noteObject = AllOfTheNotes.find((note) => { 
        return note.id === noteId

        const TitleOfNote = document.querySelector("#note--title")
        const AuthorofNote = document.querySelector("#note--author")
        const ContentOfNote = document.querySelector("#note--content")
        const CriminalOfNote = document.querySelector("#noteForm--criminal")
        const id = document.querySelector("#noteId")
        
        TitleOfNote.value = noteObj.title
        AuthorofNote.value = noteObj.author
        CantentOfNote.value = noteObj.content
        CriminalOfNote.value = noteObj.criminalId
        id.value = noteId


    })


})

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
        render()
    } else {
        const updatedNote = {
            title: noteTitle.value,
            criminalId: parseInt(noteCriminal.value),
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now(),
            id: parseInt(id.value)
        }
        editNote(updatedNote)
        id.value = ""
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
        <input type="hidden" id="${noteId}" name="noteId" value="">
    `
})
}

export const NoteForm = () => {
    render()
}
