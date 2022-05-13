const { response } = require("express");
const express = require("express");

const app = express();

// app.get("/server", (require, response) => {
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.send("hello ajax");
// });
app.all("/server", (require, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("hello ajax post");
});

// app.all是能接受所有的请求

app.listen("8000", () => {
  console.log("服务已经启动，8000端口启动中....");
});
