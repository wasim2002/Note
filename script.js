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

    deleteNote = note.querySelector(".fa-trash-can")
    deleteNote.addEventListener("click",function(){
        note.remove()
    })
    main.appendChild(note)
})