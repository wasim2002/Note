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
        
    }
}