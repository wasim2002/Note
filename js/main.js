import notesView from "./notesView.js";
import NoteAPI from "./API.js";

const main = document.querySelector("main")
const view = new notesView(main, {
    onNoteEdit(title, body) {
    }
})
view.updateListItems(NoteAPI.getLocalNotes())
