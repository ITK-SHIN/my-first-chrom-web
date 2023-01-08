const meMoForm = document.getElementById("memo-form");
const meMoInput = document.querySelector("#memo-form input");
const meMoList = document.querySelector("#memo-list");

let meMos = [];

const MEMOS_KEY = "memos";

//3번
function saveMeMos() {
  localStorage.setItem(MEMOS_KEY, JSON.stringify(meMos));
}

//4번
function deleteMeMo(event) {
  const li = event.target.parentElement; //click한 button의 부모 li
  li.remove();
  meMos = meMos.filter((memo) => memo.id !== parseInt(li.id));
  saveMeMos();
}
//2번
function paintMeMo(newMemo) {
  const li = document.createElement("li");
  li.id = newMemo.id;
  const span = document.createElement("span");
  span.innerText = newMemo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteMeMo); //3번으로
  li.appendChild(span);
  li.appendChild(button);
  meMoList.appendChild(li);
}

//1번
function handleMeMoSubmit(event) {
  event.preventDefault(); //form 제출시 새로고침 막기
  const newMemo = meMoInput.value;
  meMoInput.value = "";
  const newMemoObj = {
    text: newMemo,
    id: Date.now(),
  };
  meMos.push(newMemoObj);
  paintMeMo(newMemoObj); //2번으로
  saveMeMos(); //4번으로
}

meMoForm.addEventListener("submit", handleMeMoSubmit); //1번으로

const savedMeMos = localStorage.getItem(MEMOS_KEY); // savedMeMos 에 loCalSotrage의 값을 저장한다.

//새로고침시 localStorage가 null이 아니면
if (savedMeMos !== null) {
  const parsedMeMos = JSON.parse(savedMeMos);
  meMos = parsedMeMos;
  parsedMeMos.forEach(paintMeMo);
}
