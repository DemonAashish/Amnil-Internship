
// Create a "close" button 
const myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
const close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}
// checked
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
//new list item 
function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Enter toDo task");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
   document.getElementById("myInput").value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    saveLocal(inputValue);
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
      }
    }
}
//Clearing the list
function removeAll(){
  const lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
//local Storage
function saveLocal(todo){
  let todos;
  if (localStorage.getItem("todos")===null){
    todos=[];
  }else{
    todos=JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));
}
document.addEventListener("DOMContentLoaded",displayTodo);
//displaying local storage
function displayTodo(){
  let todos;
  if (localStorage.getItem("todos")===null){
    todos=[];
  }else{
    todos=JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todos) {
    const li = document.createElement("li");
    const inputValue= todos;
    const t = document.createTextNode(inputValue);
    // saveLocal(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
      }
    }
  });
}


