const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const deleteItems = document.querySelector('.delete')
const allCheck = document.querySelector('.check')
const allUncheck = document.querySelector('.uncheck');

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item')).value;;
    const item = {
        text, // text: text
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    setItemToLocalStorage('items', items)
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
            `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    populateList(items, itemsList);
    setItemToLocalStorage('items', items)
}

function deleteAll() {
    localStorage.removeItem('items');
    location.reload();
}

function setItemToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function checkAll() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    console.log(checkboxes);
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    })
}

function uncheckAll() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    console.log(checkboxes);
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    })
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
deleteItems.addEventListener('click', deleteAll);
allCheck.addEventListener('click', checkAll);
allUncheck.addEventListener('click', uncheckAll);
populateList(items, itemsList);