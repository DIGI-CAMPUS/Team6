const todoInput = document.querySelector('#todo-input');
todoInput.addEventListener('keyup', enterkey);
function enterkey() {
  if (window.event.keyCode == 13) {
    enterInput();
  }
}

function enterInput() {
  const todoList = document.querySelector('.todo-list');
  const createli = document.createElement('li');
  const div = document.createElement('div');
  const addList = `<div>${todoInput.value}</div>`;
  createli.innerHTML = addList;
  todoList.prepend(createli);
  todoInput.value = '';
}
