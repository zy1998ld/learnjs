// js改变之后要重新关闭启动才能起作用
// 1. 引入express
const express = require("express");
const { json } = require("express/lib/response");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// require 是对请求报文的封装
// response是对响应报文的封装
// app.all是能接受所有的请求
app.get("/", (require, response) => {
  // 设置响应头，允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置接受所有响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  response.send("hello express");
});

// 4. 监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动，8000端口启动中....");
});
// ctrl + c 关闭端口
// npm init --yes
// npm i express
// node .js

// npm install -g nodemon
// npx nodemon .js
// nodemon .js
