const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates.map((plate, index) => {
    return `
      <li>
        <span>
          <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''} />
          <label for="item${index}">${plate.text}</label>
        </span>
        <span class="icon">
          <i class="far fa-trash-alt" data-index=${index}></i>
        </span>
      </li>
    `;
  }).join('');
}

function toggleDoneOrDelete(e) {
  if(e.target.matches('input')) {

    const el = e.target;
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));

  } else if(e.target.matches('i')) {

    const el = e.target;
    const index = e.target.dataset.index;
    items.splice(index, 1);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));

  } else {

    return;

  }
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDoneOrDelete);

populateList(items, itemsList);