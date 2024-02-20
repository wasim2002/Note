const addBtn = document.querySelector(".addBtn");
const main = document.querySelector("main");

addBtn.addEventListener("click", createNote);

function createNote() {
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="note_nav">
            <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
            <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
        </div>
        <div class="textarea">
            <textarea autofocus></textarea>
        </div>
    `;

    main.appendChild(note);

    const deleteNote = note.querySelector(".fa-trash-can");
    const saveBtn = note.querySelector(".fa-floppy-disk");

    deleteNote.addEventListener("click", deleteNoteHandler);
    saveBtn.addEventListener("click", saveNote);
}

function deleteNoteHandler() {
    const note = this.closest('.note');
    note.remove();
}

function saveNote() {
    const allNotes = document.querySelectorAll(".textarea textarea");
    let arr = [];
    allNotes.forEach((noteData) => {
        arr.push(noteData.value.trim());
    });
    console.log(arr);
    localStorage.setItem("notes", JSON.stringify(arr));
}
