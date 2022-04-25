const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

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

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keyup', (event) => {
  if(event.key === 'Enter') {
    onAdd();
  }
});

// input.addEventListener('keydown', (event) => {
//   if(event.isComposing) {
//     return;
//   }
//   if(event.key === 'Enter') {
//     onAdd();
//   }
// });

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if(id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"`);
    toBeDeleted.remove();
  }
});