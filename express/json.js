const { response } = require("express");
const express = require("express");
const app = express();
app.all("/json-server", (require, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  const data = {
    name: "zhuyang",
    sex: "f",
    year: "22",
  };
  let str = JSON.stringify(data);
  response.send(str); //send方法只能接受字符串和buffer格式，需要先转换
});
app.listen("8000", () => {
  console.log("服务启动，8000端口启动中....");
});
