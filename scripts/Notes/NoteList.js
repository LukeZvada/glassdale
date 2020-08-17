import { getNotes, useNotes } from "./NoteDataProvider.js"
import { noteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener('showNotesClicked', customEvent => {
    NoteList()
})

const render = (noteArr) => { 
    const allNotesHTML = noteArr.map (
        (currentNote) => {
           return noteHTMLConverter(currentNote)  
        }
    ).join("")

    contentTarget.innerHTML = allNotesHTML
}

export const NoteList = () => { 
    getNotes()
        .then(() => { 
            const allNotes = useNotes()
            render(allNotes)
        })
}


// eventHub.addEventListener("click", clickEvent => {
//     if(clickEvent.target.id.startsWith("deleteNote--")) { 
//         const [prefix, noteId] = clickEvent.target.id.split("--")
//         deleteNote(noteId)
//     }
// })


eventHub.addEventListener("noteStateChanged", customEvent => {
    const allDeletedNotes = useNotes()
    render(allDeletedNotes)
})
