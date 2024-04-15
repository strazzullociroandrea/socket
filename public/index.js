const input = document.getElementById("input");
const button = document.getElementById("sendButton");
const chat = document.getElementById("chat");
const user = document.getElementById("user");
const log = document.getElementById("log");
const login = document.getElementById("login");
const chatb = document.getElementById("chatb");


const template = "<li class=\"list-group-item\">%MESSAGE</li>";
const messages = [];

const socket = io();

input.onkeydown = (event) => {
  if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
  }
}

button.onclick = () => {
  socket.emit("message", input.value);
  input.value = "";
}

log.onclick = () =>{
  if(user.value && user.value != ""){
    user.classList.remove("border-danger");
    socket.emit("login", user.value);
    login.classList.add("d-none");
    chatb.classList.remove("d-none");
  }else{
    user.classList.add("border-danger");
  }
  
}



socket.on("chat", (message) => {
  messages.push(message);
  render();
})

const render = () => {
  let html = "";
  messages.forEach((message) => {
    const row = template.replace("%MESSAGE", message);
    html+=row;
  });
  chat.innerHTML = html;
  window.scrollTo(0, document.body.scrollHeight);
}