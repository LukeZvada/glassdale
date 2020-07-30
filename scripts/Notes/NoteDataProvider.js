let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const useNotes = () => { 
    return notes.slice()
}
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST", // this is a create method 
        headers: {
            "Content-Type": "application/json" //this is sending metadata. Telling the server its json 
        },
        body: JSON.stringify(note)//this is the body that yu create
    })
    .then(getNotes) //once function is done then it goes to get the notes. This is because it keeps the state of the API and Application syched 
    .then(dispatchStateChangeEvent) //instead of x amount of notes you now have y amount of created. State event 
}








