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
        const notes = NoteAPI.getLocalNotes();
        this.#setNotes(notes);
        if (notes.length > 0) {
            this.#setActiveNote(notes[0])
        }
    }
    #setNotes(notes) {
        this.notes = notes;
        this.view.updateListItems(notes);
        this.view.updatePreviewVisibility(notes.length > 0);
    }
    #setActiveNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note);
    }
    #handlers() {
        return {
            onNoteSelect: (noteId) => {
                const selectedNote = this.notes.find(note => note.id == noteId)
                this.#setActiveNote(selectedNote)
            },
            onNoteAdd: () => {
                const newNote = {
                    title: "Untitled",
                    body: "Write Note here...."
                }
                NoteAPI.saveNote(newNote)
                this.#refreshNotes()
            },
            onNoteEdit: (title, body) => {
                NoteAPI.saveNote({
                    id: this.activeNote.id,
                    title, body
                })
                this.#refreshNotes()
            },
            onNoteDelete: (noteId) => {
                NoteAPI.deleteNote(noteId)
                this.#refreshNotes()
            }
        }
    }
}