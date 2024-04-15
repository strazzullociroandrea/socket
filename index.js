const fs = require("fs");
const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const conf = JSON.parse(fs.readFileSync("./conf.json"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use("/", express.static(path.join(__dirname, "public")));
const server = http.createServer(app);

const io = new Server(server);

//gestione connessione
io.on("connection", (socket) => {
  //gestione login
  let user;
  socket.on("login", (username) => {
    user = username;
    io.emit("chat", "New user connected: " + username);
  });

  //gestione messaggio socket
  socket.on("message", (message) => {
    const response = user + ": " + message;
    io.emit("chat", response); //mando ai client il messaggio dell'utente
  });
});

server.listen(conf.port, () => {
  console.log("server running on port: " + conf.port);
});
