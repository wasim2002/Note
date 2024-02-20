const addBtn = document.querySelector(".addBtn")
const main = document.querySelector("main")

addBtn.addEventListener("click", function () {
    let note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="note_nav">
                <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
            </div>
            <div class="textarea">
                <textarea autofocus></textarea>
            </div>
    `

    main.appendChild(note)
    saveNote()
    deleteNote = note.querySelector(".fa-trash-can")
    saveBtn = note.querySelector(".fa-floppy-disk")
    deleteNote.addEventListener("click", function () {
        note.remove()
    })
    saveBtn.addEventListener("click", saveNote)
})
function saveNote() {
    const allNotes = document.querySelectorAll("textarea")
    let arr = []
    allNotes.forEach((noteData) => {
        arr.push(noteData.value.trim())
    })
    console.log(arr);
    localStorage.setItem("notes",JSON.stringify(arr))
}