const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

//4번
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//3번
function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}
//2번
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); //3번으로
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//1번
function handleToDoSubmit(event) {
  event.preventDefault(); //form 제출시 새로고침 막기
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); //2번으로
  saveToDos(); //4번으로
}

toDoForm.addEventListener("submit", handleToDoSubmit); //1번으로

const savedToDos = localStorage.getItem(TODOS_KEY); // savedToDos 에 loCalSotrage의 값을 저장한다.

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
