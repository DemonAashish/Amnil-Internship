
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


//time

const recentDate=new Date();
let time=recentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
let startTime=(document.getElementById("startTime").value);
let endTime=document.getElementById("endTime").value;
 if(startTime<=time<=endTime){
  const list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}



//new list item 
function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    // const startTime=(document.getElementById("startTime").value);
    // const endTime=document.getElementById("endTime").value;
    const va=`${inputValue} `;
    // ${startTime} ${endTime}
    //start: ${startDate} end:${endDate}
    const t = document.createTextNode(va);
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
    saveLocal(va);
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
//searching 
function searchFun(){
  var filter=document.getElementById('searchBar').value.toUpperCase();
  var ul=document.getElementById('myUL');
  var li=ul.getElementsByTagName('li');
  let txtValue;
  for(i=0;i<li.length;i++){
    txtValue=li[i].innerHTML||li[i].textContent;
    if(txtValue.toUpperCase().indexOf(filter)>-1){
      li[i].style.display="";
    }else{
      li[i].style.display="none";
    }

  }
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
// remove todos
// function removeTodo(todo){
//   let todos;
//   if (localStorage.getItem("todos")===null){
//     todos=[];
//   }else{
//     todos=JSON.parse(localStorage.getItem("todos"));
//   }
//   const todoIndex=todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex),1);
//   localStorage.setItem("todos",JSON.stringify(todos));
// }

