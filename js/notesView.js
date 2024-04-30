export default class notesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
        <div class="list-sec">
            <div class="btn">
                <div class="add-btn">
                    Add Note
                </div>
            </div>
            <div class="list-items">
            </div>
        </div>
        <hr>
        <div class="preview-sec">
            <div class="color">
                <img src="https://www.w3schools.com/images/colorpicker2000.png" alt="">
                <div class="bg-option">
                    <li id="#E2DFD0" style="background-color: #E2DFD0;"></li>
                    <li id="#FFD0D0" style="background-color: #FFD0D0;"></li>
                    <li id="#FFFBDA" style="background-color: #FFFBDA;"></li>
                    <li id="#E1F7F5" style="background-color: #E1F7F5;"></li>
                    <li id="#F0EBE3" style="background-color: #F0EBE3;"></li>
                    <li id="#E8EFCF" style="background-color: #E8EFCF;"></li>
                    <li id="#BED7DC" style="background-color: #BED7DC;"></li>
                    <li id="#F5E8DD" style="background-color: #F5E8DD;"></li>
                    <li id="#E4DEBE" style="background-color: #E4DEBE;"></li>
                </div>
            </div>
            <input type="text" name="" id="body-title" placeholder="Title...">
            <textarea class="textarea" placeholder="Note..."></textarea>
        </div>
        `
        const btnAddNote = this.root.querySelector(".add-btn")
        const inputTitle = this.root.querySelector("#body-title")
        const inputBody = this.root.querySelector(".textarea")
        const colorImg = this.root.querySelector(".color img")
        const colorOptCont = this.root.querySelector(".bg-option")
        const colorOpt = this.root.querySelectorAll("li")
        const preSec = this.root.querySelector(".preview-sec")

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inputTitle, inputBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updateTitle = inputTitle.value.trim()
                const updateBody = inputBody.value.trim()
                this.onNoteEdit(updateTitle, updateBody)
            })
        });
        this.updatePreviewVisibility(false)

        let flagForColorCheckout = false
        colorImg.addEventListener("click", () => {
            colorImg.classList.add("scaleOff");
            colorOptCont.classList.add("scaleOn");
            flagForColorCheckout = true
        })
        colorOpt.forEach((color) => {
            color.addEventListener("click", (e) => {
                const bgColor = e.target.id
                // preSec.style.backgroundColor = bgColor
            })
        })
        document.addEventListener("click", function (e) {
            if (flagForColorCheckout) {
                if (!colorImg.contains(e.target)) {
                    colorImg.classList.remove("scaleOff");
                colorOptCont.classList.remove("scaleOn")
                    flagForColorCheckout = false
                }
            }
        })

    }
    #createListItemHTML(id, title, body, updated) {
        return `
        <div class="list-item" id="${id}">
        <div id="list-title">${title}</div>
        <div class="body-info">${body}</div>
        <div class="time"><em>
        ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
        </em></div>
    </div>
`
    }
    updateListItems(notes) {
        const listItemsCont = this.root.querySelector(".list-items")
        listItemsCont.innerHTML = ""
        for (let note of notes) {
            if (note.title == "") {
                note.title = "Untitled"
                const html = this.#createListItemHTML(note.id, note.title, note.body, new Date(note.updated))
                listItemsCont.insertAdjacentHTML("beforeend", html)
            } else {
                const html = this.#createListItemHTML(note.id, note.title, note.body, new Date(note.updated))
                listItemsCont.insertAdjacentHTML("beforeend", html)
            }
        }
        listItemsCont.querySelectorAll(".list-item").forEach((listItem) => {
            listItem.addEventListener("click", () => {
                this.onNoteSelect(listItem.id)
            })
            listItem.addEventListener("dblclick", () => {
                const checkDelete = confirm("You want to delete this Note?")
                if (checkDelete) {
                    this.onNoteDelete(listItem.id)
                }
            })
        })
    }
    updateActiveNote(notes) {
        if (notes.title == "Untitled") {
            notes.title = ""
            this.root.querySelector("#body-title").value = notes.title;
        } else {
            this.root.querySelector("#body-title").value = notes.title;
        }
        this.root.querySelector(".textarea").value = notes.body;
        this.root.querySelectorAll(".list-item").forEach(listItem => {
            listItem.classList.remove("active")
        })
        this.root.querySelector(`.list-item[id="${notes.id}"]`).classList.add("active")
    }
    updatePreviewVisibility(visible) {
        this.root.querySelector(".preview-sec").style.visibility = visible ? "visible" : "hidden"
    }
}