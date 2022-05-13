const { response } = require("express");
const express = require("express");
const app = express();
app.all("/server-timeout", (require, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  // 设置三秒后发送
  setTimeout(() => {
    response.send("响应超时");
  }, 3000);
});
app.listen("8000", () => {
  console.log("服务启动,8000端口启动中...");
});
