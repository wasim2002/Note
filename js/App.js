import notesView from "./notesView.js"
import NoteAPI from "./API.js"

export default class App {
    constructor(root) {
        this.notes = []
        this.activeNote = null
        this.view = new notesView(root, this.#handlers())
        this.#refreshNotes()
    }
    #refreshNotes() {
        const notes = NoteAPI.getLocalNotes()
        this.#setNotes(notes)
        if (notes.lenght > 0) {
            this.#setActiveNote(notes[0])
        }
    }
    #setNotes(notes) {
        this.notes = notes
        this.view.updateListItems(notes)
    }
    #setActiveNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note)
    }
    #handlers() {
        return {
            onNoteSelect: (noteId) => {
                console.log("Note selected: " + noteId);
            },
            onNoteAdd: () => {
                console.log("Note added");
            },
            onNoteEdit: (title, body) => {
                console.log(title, body);
            },
            onNoteDelete: (noteId) => {
                console.log("Note Deleted :" + noteId);
            }
        }
    }
}