const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd() {
  const text = input.value;
  if(text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0; 
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
        <div class="item">
          <sapn class="item_name">${text}</sapn>
          <button class="item_delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
          </button>
        </div>
        <div class="item_divider"></div>`;

  id++;
  
  return itemRow;

}


items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if(id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"`);
    toBeDeleted.remove();
  }
});