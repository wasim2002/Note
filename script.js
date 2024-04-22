const addBtn = document.querySelector(".add-btn")
const listItems = document.querySelector(".list-items");
(function listItemsBody() {
    listItems.innerHTML = `
    <div class="list-item">
        <input type="text" name="" id="list-title" placeholder="title here kjdkocn osdocvlkcd ofhvnfdav ojadvodjkv m;sljc p'kajvdmv" disabled>
        <div class="body-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum unde molestias at nemo aliquam reprehenderit dolore quibusdam fuga quos, qui natus amet aliquid libero reiciendis enim laboriosam sequi iste accusantium.
        </div>
        <div class="time"><em>Thursday,13/04/2024</em> </div>
    </div>
`
})()
function getLocalStorageItem() {
    return JSON.parse(localStorage.getItem("notes")) || []
}
function checkingNotes() {
    const getLocal = getLocalStorageItem()
    // const existing = getLocal.find(note => note.id ==)
}
function setLocalStorageItem() {

}
const poe = document.querySelector(".preview-sec")
poe.innerHTML = `
        <input type="text" name="" id="body-title" placeholder="Title...">
        <textarea class="textarea"></textarea>
`
const nEW = document.querySelector(".textarea")
nEW.addEventListener("blur", () => {
    const parent = nEW.parentNode
    console.log(parent.children[1].value);
})


