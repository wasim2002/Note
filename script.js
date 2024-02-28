const addBtn = document.querySelector(".addBtn")
const main = document.querySelector("main")

addBtn.addEventListener("click", addNote)

function addNote() {
    let noteDiv = document.createElement("div")
    noteDiv.classList.add("note")
    noteDiv.innerHTML = `
    <div class="note_nav">
                <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
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
(
    function () {
        let lsNotes = JSON.parse(localStorage.getItem("notes")) ?? [];
        
    }
)()
function savenotes() {
    let textareas = document.querySelectorAll(".textarea textarea")
    textareas.forEach((textarea) => {
        localStorage.setItem("notes",JSON.stringify(textarea.value.trim()))
    })
}