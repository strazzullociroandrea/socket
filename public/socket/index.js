//dom ed oggetti
const input = document.getElementById("input");
const button = document.getElementById("sendButton");
const chat = document.getElementById("chat");
const user = document.getElementById("user");
const disconnetti = document.getElementById("disconnetti");

const template = '<li class="list-group-item %textColor">%MESSAGE</li>';
const messages = [];
const socket = io();
const url = new URL(window.location.href);
const username = url.searchParams.get("username");

//funzioni
const render = () => {
  let html = "";
  messages.forEach((message) => {
    let row = template.replace("%MESSAGE", message);
    if(message.includes(username) && !message.includes("partecipa ora alla chat")){
      row = row.replace("%textColor","text-primary");
    }else{
      row = row.replace("%textColor","text-dark");
    }
    html += row;
    
  });
  chat.innerHTML = html;
  window.scrollTo(0, document.body.scrollHeight);
};

//al caricamento della pagina gestisco il login
window.onload = () => {
  if (username && username != "") {
    socket.emit("login", username);
  } else {
    window.location.href = "./../";
  }
};

input.onkeydown = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
};

button.onclick = () => {
  socket.emit("message", input.value);
  input.value = "";
};
socket.on("chat", (message) => {
  messages.push(message);
  render();
});

disconnetti.onclick = () => {
  socket.emit("disconnecter");
  window.location.href = "./../";
};
