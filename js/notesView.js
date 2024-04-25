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
        <input type="text" name="" id="body-title" placeholder="Title...">
        <textarea class="textarea" placeholder="Note..."></textarea>
        </div>
        `
        const btnAddNote = this.root.querySelector(".add-btn")
        const inputTitle = this.root.querySelector("#body-title")
        const inputBody = this.root.querySelector(".textarea")

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
            const html = this.#createListItemHTML(note.id, note.title, note.body, new Date(note.updated))
            listItemsCont.insertAdjacentHTML("beforeend", html)
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
}