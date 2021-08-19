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



