'use strict';

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addButton = document.querySelector('#add-button'); // Assuming you have a button with this id
const checkedClass = 'checked';

function addTask() {
  const taskName = inputBox.value.trim();
  if (!taskName) {
    alert('Please enter a task name!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskName;
  listContainer.appendChild(li);

  const span = document.createElement('span');
  span.textContent = '\u00D7';
  li.appendChild(span);

  inputBox.value = '';
  saveData();
}

inputBox.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

addButton.addEventListener('click', function () {
  addTask();
});

listContainer.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName === 'LI') {
    target.classList.toggle(checkedClass);
    saveData();
  } else if (target.tagName === 'SPAN') {
    target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data') || '';
}

showTask();
