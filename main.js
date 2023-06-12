const inputTodo= document.getElementById('todo-name');
const todoContainer= document.getElementById('todo-list');


function addTodo(){
  if(inputTodo.value === ''){
    alert("Don't Procastinate!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputTodo.value;
    todoContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  saveData()
  inputTodo.value = "";

}



todoContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
}, false);

function saveData(){
  localStorage.setItem("data", todoContainer.innerHTML);
}

function showTask(){
  todoContainer.innerHTML = localStorage.getItem("data")
}
showTask();

