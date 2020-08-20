import { deleteNote } from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteNote--")) { 
        const [prefix, noteId] = clickEvent.target.id.split("--")
        
        deleteNote(noteId)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("editNote--")) { 
        const [prompt, noteID] = clickEvent.target.id.split("--")
        const customEvent = new CustomEvent("editNote", { 
            detail: {
                noteID: parseInt(noteID)

            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})

export const noteHTMLConverter = (noteObject) => {
    return ` 
        <section class="note">
            <divclass="note__Title>Title: ${noteObject.title}</div> 
            <divclass="note__author>Author: ${noteObject.author}</div> 
            <divclass="note__content>Content: ${noteObject.content}</div> 
            <divclass="note__timestamp>Date: ${new Date(noteObject.timestamp).toLocaleDateString( `en-US` )}</div> 

            <button id="deleteNote--${noteObject.id}">Delete</button> 
            <button id="editNote--${ noteObject.id }">Edit</button> 
        </section>
    `
}