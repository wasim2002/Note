const addBtn = document.querySelector(".addBtn")
const main = document.querySelector("main")

addBtn.addEventListener("click", addNote)

function addNote() {
    let noteDiv = document.createElement("div")
    noteDiv.classList.add("note")
    noteDiv.innerHTML = `
    <div class="note_nav">
                <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
                <i class="fa-regular fa-trash-can" onclick="deleteLsNote()" style="color: #ffffff;"></i>
            </div>
            <div class="textarea">
                <textarea autofocus></textarea>
            </div>
    `
    main.appendChild(noteDiv)

    noteDiv.querySelector(".fa-floppy-disk").addEventListener("click", savenotes)
    noteDiv.querySelector(".fa-trash-can").addEventListener("click", function () {
        noteDiv.remove()
    })
}

function lsAvailNotesCreate() {
    let lsNotes = JSON.parse(localStorage.getItem("notes")) ?? [];
    lsNotes.forEach((lsnote) => {
        let noteDiv = document.createElement("div")
        noteDiv.classList.add("note")
        noteDiv.innerHTML = `
        <div class="note_nav">
                    <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
                    <i class="fa-regular fa-trash-can" onclick="deleteLsNote()" style="color: #ffffff;"></i>
                </div>
                <div class="textarea">
                    <textarea autofocus>${lsnote}</textarea>
                </div>
        `
        main.appendChild(noteDiv)
        noteDiv.querySelector(".fa-floppy-disk").addEventListener("click", savenotes)
        noteDiv.querySelector(".fa-trash-can").addEventListener("click", function () {
            noteDiv.remove()
        })
    })
}
lsAvailNotesCreate()

function savenotes() {
    console.log("save btn clicked");
    let textareas = document.querySelectorAll(".textarea textarea")
    let arr = JSON.parse(localStorage.getItem("notes")) || []
    textareas.forEach((textarea) => {
        arr.push(textarea.value.trim())
        localStorage.setItem("notes", JSON.stringify(arr))
    })
}

function deleteLsNote() {
    console.log("delete function called");
}
