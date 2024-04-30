export default class NoteAPI {
    static getLocalNotes() {
        const localNotes = JSON.parse(localStorage.getItem("notes")) || []
        return localNotes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        })
    }
    static uniqueID() {
        return new Date().getTime()
    }
    static saveNote(noteToSave) {
        const lsNote = NoteAPI.getLocalNotes()
        const existing = lsNote.find((note) => note.id == noteToSave.id)
        if (existing) {
            existing.title = noteToSave.title
            existing.body = noteToSave.body
            existing.bgColor = noteToSave.bgColor
            existing.updated = new Date().toISOString()
        } else {
            noteToSave.id = NoteAPI.uniqueID()
            noteToSave.updated = new Date().toISOString()
            lsNote.push(noteToSave)
        }
        localStorage.setItem("notes", JSON.stringify(lsNote))
    }
    static deleteNote(id) {
        const lsNote = NoteAPI.getLocalNotes()
        const newNote = lsNote.filter((note) => note.id != id)
        localStorage.setItem("notes",JSON.stringify(newNote))
    }
}