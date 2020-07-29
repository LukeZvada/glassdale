// import { getOfficers, useOfficers } from "./OfficerProvider.js";

// getOfficers()
// .then (() => {
// const officerArray = useOfficers()
// console.log(officerArray)
// })


import { officerList } from "./officers/OfficerList.js";
import { criminalList} from "./criminals/criminalList.js";
import { ConvictionSelect } from "./convictions/covinictionSelect.js";
import { officerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./Notes/NoteForm.js";
import { showNoteButton } from "./Notes/ShowNoteButton.js";
import "./Notes/NoteList.js"

officerList()
criminalList()
ConvictionSelect()
officerSelect()
NoteForm()
showNoteButton()