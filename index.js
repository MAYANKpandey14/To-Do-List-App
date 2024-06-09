
//** this code has the issue to trigger alert only when no task is added afterwards it adds blank tasks. */

// const inputBox = document.getElementById("input-box");
// const listContainer= document.getElementById("list-container");
// let check = false;

// function addTask(){
//     if(inputBox.value.length == 0){
//         alert("Kindly Enter Task Name!!!!")
//     }

//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML= "\u00D7";
//         li.appendChild(span);
//         check=true;
//     }
//     if(check !== false){
//     inputBox.value=" ";
//     }
//     saveData();


// }

// listContainer.addEventListener("click", function(r){
//     if(r.target.tagName==="LI"){
//         r.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(r.target.tagName==="SPAN"){
//         r.target.parentElement.remove();
//         check=false;
//         saveData();

//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML=localStorage.getItem("data");
// }

// showTask();

//-------------------------------------------------------------

// * new js code 
// ** --This has error of adding a task even if input is only whitespace.

// "use strict";

// const inputBox = document.querySelector("#input-box");
// const listContainer = document.querySelector("#list-container");
// let check = false;

// function addTask() {
//   if (inputBox.value.length === 0) {
//     alert("Kindly Enter Task Name!!!!");
//   } else {
//     const li = document.createElement("li");
//     li.textContent = inputBox.value;
//     listContainer.appendChild(li);

//     const span = document.createElement("span");
//     span.innerHTML = "\u00D7";
//     li.appendChild(span);

//     check = true;
//   }

//   if (check !== false) {
//     inputBox.value = "";
//   }

//   saveData();
// }

// listContainer.addEventListener("click", function (event) {
//   const target = event.target;

//   if (target.tagName === "LI") {
//     target.classList.toggle("checked");
//     saveData();
//   } else if (target.tagName === "SPAN") {
//     target.parentElement.remove();
//     check = false;
//     saveData();
//   }
// });

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//   listContainer.innerHTML = localStorage.getItem("data") || "";
// }

// showTask();

//-------------------------------------------------------------------------------

// * 3rd version

'use strict';

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const checkedClass = 'checked';

document.querySelector('#input-box').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
});

function addTask() {
  if (!inputBox.value.trim()) {
    alert('Please enter a task name!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = inputBox.value.trim();
  listContainer.appendChild(li);

  const span = document.createElement('span');
  span.textContent = '\u00D7';
  li.appendChild(span);

  inputBox.value = '';
  saveData();
}

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
