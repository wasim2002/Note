import notesView from "./notesView.js";
import NoteAPI from "./API.js";

const main = document.querySelector("main")
const view = new notesView(main, {
    onNoteEdit(){

    },
    onNoteSelect(id) {
        console.log(`note id : ${id}`);
    },
    onNoteDelete(id){
        console.log("note deleted: " ,id);
    }
})
view.updateListItems(NoteAPI.getLocalNotes())
