const addBtn = document.querySelector(".addBtn")
const main = document.querySelector("main")

addBtn.addEventListener("click", addNote)

function addNote() {
    let noteDiv = document.createElement("div")
    noteDiv.classList.add("note")
    noteDiv.innerHTML = `
    <div class="note_nav">
                <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
                <i class="fa-regular fa-trash-can" onclick="deleteLsNote(this)" style="color: #ffffff;"></i>
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
    lsNotes.forEach((lsnote, index) => {
        let noteDiv = document.createElement("div")
        noteDiv.classList.add("note")
        noteDiv.innerHTML = `
        <div class="note_nav">
                    <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
                    <i class="fa-regular fa-trash-can" onclick="deleteLsNote(${index})" style="color: #ffffff;"></i>
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
    let textareas = document.querySelectorAll(".textarea textarea")
    let lsArr = JSON.parse(localStorage.getItem("notes")) || []
    function displayTextarea() {
        let arr = []
        for (let textarea of textareas) {
            arr.push(textarea.value)
        }
        return arr
    }
    function lsNotes() {
        let arr = []
        for (let Arr of lsArr) {
            arr.push(Arr)
        }
        return arr
    }
    let DTA = displayTextarea()
    let LN = lsNotes()
    if (JSON.stringify(DTA) !== JSON.stringify(LN)) {
        let notInLocalStorage = DTA.filter(item => !LN.includes(item))
        notInLocalStorage.forEach((items) => {
            LN.push(items)
        })
        localStorage.setItem("notes", JSON.stringify(LN))
    } else {
        console.log("Not Allowed");
    }
}

function deleteLsNote(i) {
    let lsNotes = JSON.parse(localStorage.getItem("notes")) || []
    lsNotes.splice(i, 1)
    localStorage.setItem("notes", JSON.stringify(lsNotes)) 
}