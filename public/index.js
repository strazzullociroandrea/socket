const user = document.getElementById("user");
const log = document.getElementById("log");

log.onclick = () => {
  const username = user.value;
  user.value = "";
  if (username && username != "") {
    user.classList.remove("border-danger");
    window.location.href = "./socket/index.html?username="+username;
  } else {
    user.classList.add("border-danger");
  }
};
