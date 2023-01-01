const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `안녕하세요 ${username}님 환영합니다`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
