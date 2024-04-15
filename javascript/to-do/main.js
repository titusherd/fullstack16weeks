const input = document.getElementById('input');
const list = document.getElementById('list');
const button = document.getElementById('add');

button.addEventListener('click', () => {
    const task = input.value;
    const listItem = document.createElement('li');
    listItem.textContent = task;

    list.appendChild(listItem);
});