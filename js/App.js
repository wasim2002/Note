import notesView from "./notesView.js"

export default class App {
    constructor(root) {
        this.notes = []
        this.activeNote = null
        this.view = new notesView(root, this.#handlers())
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